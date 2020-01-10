from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return HttpResponse("Api Documentation")

def tent(request, country_name, city_name, tentID):
    return HttpResponse("Tent Site Page")