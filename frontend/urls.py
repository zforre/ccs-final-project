from django.urls import include, path

from . import views

app_name = 'frontend'

urlpatterns = [
    
    path('spotter/', views.IndexView.as_view(), name='spotter'),
    path('signup/', views.IndexView.as_view(), name='signup'),
    path('profilesetup/', views.IndexView.as_view(), name='setup'),
    path('login/', views.IndexView.as_view(), name='login'),
    path('grouplist/', views.IndexView.as_view(), name='list'),
    path('beer/', views.IndexView.as_view(), name='beer'),
    path('profile/user', views.IndexView.as_view(), name='profile'),
    path('profile/<int:pk>/edit', views.IndexView.as_view(), name='profile_edit'),
    path('groupupdate/<int:pk>/', views.IndexView.as_view(), name='update'),
    path('groupdetail/<int:pk>/', views.IndexView.as_view(), name='detail'),
    path('groupform/', views.IndexView.as_view(), name='form'),
    path('', views.IndexView.as_view(), name='index'),
]

# get the urls to work on heroku!