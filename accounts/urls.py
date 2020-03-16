from django.urls import path 

from . import views

app_name = 'api_v1_profile'

urlpatterns = [
    path('profile/', views.ProfileListCreate.as_view(), name='profile')

]