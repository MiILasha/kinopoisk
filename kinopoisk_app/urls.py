from django.urls import path
from . import views
# app_name = 'kinopoisk_app'

urlpatterns = [
    path('', views.index, name='index'),
    path('auth/', views.auth, name='auth'),
    path('reg/', views.reg, name='reg'),
    path('logout/', views.logout_view, name='logout'),
    path('profile/', views.profile, name='profile'),
    path('oppenheimer/', views.oppenheimer, name='oppenheimer'),
    path('thegreenmile/', views.thegreenmile, name='thegreenmile'),
    # path('topgun/', views.topgun, name='topgun'),
    path('<str:link_title>/', views.film_page, name='Film_page')
]
