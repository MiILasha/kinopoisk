from django.contrib import admin
from .models import FirstComment, Email, FilmPage

admin.site.register(FirstComment)
admin.site.register(Email)
admin.site.register(FilmPage)