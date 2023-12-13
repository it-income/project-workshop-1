from transformers import pipeline


class RestaurantFeedbackAnalyzer:
    def __init__(self):
        self.sentiment_model = pipeline("sentiment-analysis", model="blanchefort/rubert-base-cased-sentiment-rurewiews")

    def analyze_feedback(self, restaurant, feedback):
        sentiment_result = self.sentiment_model([feedback])[0]

        sentiment_labels = sentiment_result['label']
        sentiment_prob_neutral = sentiment_result['score'] if sentiment_labels == 'NEUTRAL' else 0
        sentiment_prob_positive = sentiment_result['score'] if sentiment_labels == 'POSITIVE' else 0
        sentiment_prob_negative = sentiment_result['score'] if sentiment_labels == 'NEGATIVE' else 0

        result = {
            'Restaurant': restaurant,
            'Feedback': feedback,
            'NEUTRAL': sentiment_prob_neutral,
            'POSITIVE': sentiment_prob_positive,
            'NEGATIVE': sentiment_prob_negative
        }

        return result