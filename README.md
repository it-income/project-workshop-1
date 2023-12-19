# Рейтинг заведений по отзывам клиентов

## Цель проекта
Создание системы рейтинга заведений по отзывам клиентов для повышения качества обслуживания клиентов. Основные задачи включают разработку программного обеспечения для отслеживания и визуализации информации о рейтинге заведений и анализа оценок посетителей, создание интерфейса для пользователей, возможность использования данных для улучшения сервиса и привлечения новых клиентов.

## Анализ проблемы
При принятии решения о посещении заведений, часто сталкиваемся с неопределенностью относительно качества услуг и обслуживания. Отсутствие достоверной информации о реальном опыте клиентов оставляет нас в непонятном положении: куда идти и что ожидать от конкретного заведения. Создание системы рейтинга заведений позволит нам получить более четкое представление о качестве услуг и обслуживания в различных заведениях, что облегчит принятие решения о выборе и сделает походы более осознанными и приятными.

## Описание решения
Идея заключается в использовании нашего программного обеспечения для анализа содержания различных отзывов о заведении, а не только на их числовых оценках. Мы стремимся создать систему, которая будет автоматически анализировать содержание отзывов клиентов и определять общую оценку (Хорошо, Нейтрально, Плохо) на основе выявленных в них паттернов и эмоциональной окраски. Это позволит нам предоставить пользователям более объективную и информативную обратную связь о качестве обслуживания и услуг в заведениях, обеспечивая более точное представление о реальном опыте клиентов.

## Технологии
- `Python`
- `Pandas` и `NumPy`: Для обработки данных и взаимодействия с моделью.
- `HaggingFace`: Для реализации с помощью моделей машинного обучения оценки отзывов.
- `API`: RESTful API с Flask или `FastAPI`: Для создания API, которое может взаимодействовать с системой оценки отзывов и предоставлять доступ к таким оценкам (результатам работы).
- Веб-интерфейс: `HTML/CSS/JavaScript`: Для создания пользовательского интерфейса, если он будет веб-ориентированным.

## Функционал файла rest_fdback_analyzer.py

Класс `RestaurantFeedbackAnalyzer` предоставляет функции для анализа обратной связи о ресторане с использованием модели Transformer.

### Методы класса:

- `init()`: Инициализирует экземпляр класса. В данном методе происходит загрузка предобученной модели для анализа тональности текста. Используется модель "blanchefort/rubert-base-cased-sentiment-rurewiews".
  
- `analyze_feedback(restaurant, feedback)`: Производит анализ обратной связи о ресторане. Принимает два аргумента: название ресторана (`restaurant`) и текст обратной связи (`feedback`). 

    Метод анализирует тональность текста обратной связи с помощью предобученной модели и возвращает результат анализа в виде словаря. В словаре содержится информация о ресторане, тексте обратной связи и вероятностях тональностей: `NEUTRAL` (нейтральная), `POSITIVE` (позитивная) и `NEGATIVE` (негативная).

    Пример результата анализа:
    
    ```python
    {
        'Restaurant': 'Ресторан XYZ',
        'Feedback': 'Была вчера в вашем ресторане, отличное обслуживание и вкусная еда!',
        'NEUTRAL': 0,
        'POSITIVE': 0.9866315,
        'NEGATIVE': 0
    }
    ```

## Практическая ценность и применимость
- Улучшение опыта посетителей: экономия времени на поиск заведений, уменьшение стресса.
- Преимущества использования системы: увеличение доступности информации о заведениях, повышение удовлетворения пользователей.
- Решение конкретных проблем и достижение целей проекта: сокращение времени поиска заведения, улучшение удобства посещения.

## Команда и план действий
- Менеджер проекта/Scrum-мастер: `Алексей Драчев`
- Инженер по машинному обучению: `Баканов Максим`
- Full Stack-разработчик: `Миронов Артур`, `Храмов Александр`, `Дашков Артем`
- Тестировщик-QA инженер: `Храмов Александр`
- Документалист/технический писатель: `Алексей Драчев`
