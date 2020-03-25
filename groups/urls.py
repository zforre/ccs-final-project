from django.urls import path 

from . import views

app_name = 'api_v1'

urlpatterns = [
    path('', views.GroupListCreate.as_view(), name='group_list'),
    path('<int:pk>/', views.GroupRetrieveUpdateDestroy.as_view(), name='group_detail'),
    path('beer', views.BeerListCreate.as_view(), name='group_list'),
    path('beer/<int:pk>/', views.BeerRetrieveUpdateDestroy.as_view(), name='beer_detail'),
    path('groups/<int:pk>/beer/', views.GroupBeerCreateAPIView.as_view(), name='group_beer_create'),
]