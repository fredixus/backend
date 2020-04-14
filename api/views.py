from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from .models import Documentation
def index(request):
    try:
        """ListOfApiFunctions = [
            {'name':'index','body':'test'},
            {'name':'tent','body':'Tent site'}]"""
        context = {
            "ApiDocumentation": Documentation.objects.all(),
        }
        return render(request, "api/index.html",context=context)
    except Exception as e: 
        return HttpResponse("Api Documentation Simply Exception: "+str(e))

def tent(request, country_name, city_name, tentID):
    return HttpResponse("Tent Site Page")