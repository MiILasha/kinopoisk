from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.utils import timezone
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from .models import Email, FilmPage

def index(request):
    try:
        context = {'first_name' : request.user.first_name}
        return render (request, 'index.html', context)
    except AttributeError as e:
        return render(request, 'index.html')
    
def film_page(request, link_title):
    try:
        page = FilmPage.objects.get(link_title = link_title)

        context = {
            'first_name' : request.user.first_name,
            'title' : page.title,
            'poster' : page.poster,
            'original_title' : page.original_title,
            'release_date' : page.release_date,
            'requirement_age' : page.requirement_age,
            'prod_date' : page.prod_date,
            'prod_country' : page.prod_country,
            'director' : page.director,
            'scenario' : page.scenario,
            'producer' : page.producer,
            'operator' : page.operator,
            'composer' : page.composer,
            'artist' : page.artist,
            'mounting' : page.mounting,
            'budget' : page.budget,
            'fees' : page.fees,
            'time' : page.time,
            'film_link' : page.film_link
        } 

        return render(request, 'filmpage.html', context)
    except (KeyError, FilmPage.DoesNotExist):
        return render(request, 'filmpage.html')
    
def oppenheimer(request):
    try:
        context = {'first_name' : request.user.first_name}
        return render (request, 'oppenheimer.html', context)
    except AttributeError as e:
        return render(request, 'oppenheimer.html')
    
def thegreenmile(request):
    try:
        context = {'first_name' : request.user.first_name}
        return render (request, 'the-green-mile.html', context)
    except AttributeError as e:
        return render(request, 'the-green-mile.html')
    
def topgun(request):
    try:
        context = {'first_name' : request.user.first_name}
        return render (request, 'top-gun.html', context)
    except AttributeError as e:
        return render(request, 'top-gun.html')

def profile(request):
    try:
        context = {
            'username' : request.user.username,
            'first_name' : request.user.first_name,
            'email' : request.user.email,
            'date_joined' : request.user.date_joined
        }
        return render (request, 'profile.html', context)
    except AttributeError as e:
        return render (request, 'profile.html')

def auth(request):
    if request.method =='POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            print(f'login: {username}, password: {password}') # откладка
            return JsonResponse({'status': 'success', 'message': 'OK'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Неверный логин и пароль'})
    else:
        return render(request, 'auth.html')

def reg(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        first_name = request.POST.get('first-name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        print(username, first_name, email, password) # откладка

        # create user
        user = User.objects.create_user(username, email, password)
        user.first_name = first_name
        user.save()
        login(request, user)
        return JsonResponse({'status': 'success', 'message': 'Регистрация прошла успешно'})

    return render (request, 'reg.html')

@csrf_exempt
def logout_view(request):
    if request.method == 'POST':      
        logout_state = request.POST.get('logout')
        if logout_state:
            logout(request)
            return JsonResponse({'status': 'success', 'message': 'Выход произошел успешно'})