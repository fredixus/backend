from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index(request):
    try:
        return render(request, "backend/main.html")
    except Exception as e: 
        return HttpResponse("Main Page " + str(e))
    

def tent(request, country_name, city_name, tentID):
    # some JSON:
    x = '{ "countryName":' +country_name+', "cityName":'+city_name+', "tentID":'+str(tentID)+'}'
    return HttpResponse("Tent Site Page {}:{}:{} JSON: {}".format(country_name, city_name, tentID, x))