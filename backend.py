from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from collections import defaultdict
import csv

# Импорт класса анализатора
from rest_fdback_analyzer import RestaurantFeedbackAnalyzer

# Инициализация приложения FastAPI
app = FastAPI()

# Настройка CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Инициализация класса анализатора
feedback_analyzer = RestaurantFeedbackAnalyzer()

@app.post("/analyzefeedback")
async def analyze_feedback(request: Request):
    try:
        # Получите JSON из запроса и преобразуйте его в словарь
        data = await request.json()
        restaurant = data['restaurant']
        feedback = data['feedback']

        # анализ отзыва
        result = feedback_analyzer.analyze_feedback(restaurant, feedback)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/get_feedback_by_restaurant")
async def get_feedback_by_restaurant():
    csv_file_path = 'restaurant_feedback.csv'
    # Используем defaultdict для удобного создания списка для каждого нового ключа
    feedback_by_restaurant = defaultdict(list)
    with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            # Добавляем отзыв в список для соответствующего ресторана
            feedback_by_restaurant[row['restaurant']].append(row['feedback'])
    # Преобразуем defaultdict обратно в обычный dict для возврата через API
    return dict(feedback_by_restaurant)

@app.get("/restaurants")
async def get_restaurants():
    csv_file_path = 'restaurant_feedback.csv'
    restaurants = set()  # Используем множество для хранения уникальных названий ресторанов

    with open(csv_file_path, mode='r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            restaurants.add(row['restaurant'])  # Добавляем название ресторана в множество

    return {"restaurants": list(restaurants)}

#csv_file_path = 'restaurant_feedback_ans.csv'
@app.get("/analyze")
async def analyze_feedback(restaurant_name):
    csv_file_path = 'restaurant_feedback_ans.csv'

    # Счётчики для каждого типа отзывов
    feedback_counts = {'good': 0, 'neutral': 0, 'bad': 0}
    total_count = 0  # Общее количество отзывов для расчета процентов

    with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row['restaurant'] == restaurant_name:
                total_count += 1  # Увеличиваем общий счетчик отзывов
                neutral = float(row['NEUTRAL'])
                positive = float(row['POSITIVE'])
                negative = float(row['NEGATIVE'])

                if positive > neutral and positive > negative:
                    feedback_counts['good'] += 1
                elif neutral > positive and neutral > negative:
                    feedback_counts['neutral'] += 1
                else:
                    feedback_counts['bad'] += 1

    # Преобразование в проценты
    feedback_percentages = {k: (v / total_count * 100) if total_count else 0 for k, v in feedback_counts.items()}

    return feedback_percentages


# Запуск приложения Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
