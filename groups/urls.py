from django.urls import path 

from . import views

app_name = 'api_v1'

urlpatterns = [
    
    path('<int:pk>/', views.GroupRetrieveUpdateDestroy.as_view(), name='group_detail'),
    path('beer', views.BeerListCreate.as_view(), name='group_beer'),
    path('beer/<int:pk>/', views.BeerRetrieveUpdateDestroy.as_view(), name='beer_detail'),
    path('testing/<int:pk>/', views.GroupBeerUpdate.as_view(), name='group_beer_update'),
    path('', views.GroupListCreate.as_view(), name='group_list'),
]