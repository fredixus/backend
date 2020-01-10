from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index(request):
    return HttpResponse("Main Page")

def tent(request, country_name, city_name, tentID):
    # some JSON:
    x = '{ "countryName":' +country_name+', "cityName":'+city_name+', "tentID":'+str(tentID)+'}'
    return HttpResponse("Tent Site Page {}:{}:{} /n {}".format(country_name, city_name, tentID, x))