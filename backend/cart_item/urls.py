from django.urls import path, include
from .views import CartView, CartViewSet
from rest_framework import routers

route = routers.DefaultRouter()
route.register("", CartViewSet, basename="cartviewSet")

urlpatterns = [
    path('', include(route.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
