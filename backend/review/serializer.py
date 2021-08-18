from rest_framework import serializers
from review.models import Review
from user.serializer import UserProfileSerializerPublic


class ReviewSerializer(serializers.ModelSerializer):
    user = UserProfileSerializerPublic(read_only=True)
    amount_of_comments_in_review = serializers.SerializerMethodField()
    amount_of_likes_in_review = serializers.SerializerMethodField()
    restaurant_name = serializers.SerializerMethodField()

    def get_restaurant_name(self, instance):
        return instance.restaurant.name

    @staticmethod
    def get_amount_of_comments_in_review(instance):
        return instance.comment_review.all().count()

    @staticmethod
    def get_amount_of_likes_in_review(instance):
        return instance.likes.all().count()

    class Meta:
        model = Review
        fields = "__all__"
        fields = ['user', 'text', 'rating', 'restaurant', 'restaurant_name', 'created', 'modified',
                  'amount_of_comments_in_review', 'amount_of_likes_in_review', 'likes', 'id']
