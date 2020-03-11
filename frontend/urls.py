from django.urls import include, path

from . import views

app_name = 'frontend'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('SignUp/', views.IndexView.as_view(), name='signup'),
    path('Login/', views.IndexView.as_view(), name='login'),
    path('GroupList/', views.IndexView.as_view(), name='list'),
    path('GroupDetail/', views.IndexView.as_view(), name='detail')
]