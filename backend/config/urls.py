"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from items.views import ItemList
from users.views import UserView
from cart_item.views import CartList, CartView, CartViewSet
from order_item.views import Order_ItemView
from order.views import OrderView, OrderCreateView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('', ItemList.as_view(), name='item_list'),
    path('item/', include('items.urls')),
    path('user/', UserView.as_view(), name='user_view'),
    # path('carts/', include('cart_item.urls')),
    path('carts/', CartList.as_view(), name='cartlist'),
    path('carts/add/', CartView.as_view(), name='cartView'),
    path('carts/update/', include('cart_item.urls')),
    #  CartViewSet.as_view({'get': 'list'}), name='cartViewSet'),
    path('orderitem/', Order_ItemView.as_view(), name='order_item_view'),
    path('orders/', OrderView.as_view(), name='order_view'),
    path('orders/add/', OrderCreateView.as_view(), name='order_view'),
    path('dj-rest-token-auth/', obtain_auth_token)
]
