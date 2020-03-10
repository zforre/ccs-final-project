from django.urls import path 

from . import views

app_name = 'api_v1'

urlpatterns = [
    path('', views.GroupListCreate.as_view(), name='group_list'),
    path('<int:pk>/', views.GroupRetrieveUpdateDestroy.as_view(), name='group_detail'),
]