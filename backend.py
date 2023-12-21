from fastapi import FastAPI, HTTPException, Request
from collections import defaultdict 
import csv

# Импорт класса анализатора
from rest_fdback_analyzer import RestaurantFeedbackAnalyzer

# Инициализация приложения FastAPI
app = FastAPI()

# Инициализация класса анализатора
feedback_analyzer = RestaurantFeedbackAnalyzer()

@app.post("/analyze")
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
    
@app.get("/get_feedback_as_tuples")
async def get_feedback_as_tuples():
    csv_file_path = 'restaurant_feedback.csv'
    feedback_list = []  # Список для хранения кортежей
    with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            # Создание кортежа из названия ресторана и отзыва, добавление в список
            feedback_list.append((row['restaurant'], row['feedback']))
    return feedback_list
    
 
# Запуск приложения Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
