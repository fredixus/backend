from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('get/<string:country_name>/<string:city_name>/<int:tentID>', views.tent, name='tent')
]