from django.urls import include, path

from . import views

app_name = 'frontend'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('SignUp/', views.IndexView.as_view(), name='signup'),
    path('Login/', views.IndexView.as_view(), name='login'),
    path('GroupList/', views.IndexView.as_view(), name='list'),
    path('Beer/', views.IndexView.as_view(), name='beer'),
    path('Profile/', views.IndexView.as_view(), name='profile'),
    path('GroupUpdate/<int:pk>/', views.IndexView.as_view(), name='update'),
    path('GroupDetail/<int:pk>/', views.IndexView.as_view(), name='detail'),
    path('GroupForm/', views.IndexView.as_view(), name='form')
]