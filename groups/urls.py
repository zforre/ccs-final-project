from django.urls import path 

from . import views

app_name = 'api_v1'

urlpatterns = [
    path('', views.GroupList.as_view(), name='recipe_list'),
    path('<int:pk>/', views.GroupDetail.as_view(), name='recipe_detail'),
]