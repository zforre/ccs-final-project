from django.urls import include, path

from . import views

app_name = 'frontend'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('signup/', views.IndexView.as_view(), name='signup'),
    path('profilesetup/', views.IndexView.as_view(), name='setup'),
    path('login/', views.IndexView.as_view(), name='login'),
    path('grouplist/', views.IndexView.as_view(), name='list'),
    path('beer/', views.IndexView.as_view(), name='beer'),
    path('profile/user', views.IndexView.as_view(), name='profile'),
    path('groupupdate/<int:pk>/', views.IndexView.as_view(), name='update'),
    path('groupdetail/<int:pk>/', views.IndexView.as_view(), name='detail'),
    path('groupform/', views.IndexView.as_view(), name='form')
]