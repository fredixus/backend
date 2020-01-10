from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    #ex.: /api/get/5/1/1
    path('get/<str:country_id>/<str:city_id/<int:tentID>', views.tent, name='tent')
]