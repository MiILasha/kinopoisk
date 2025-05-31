from django.db import models

class FirstComment(models.Model):
    # firCom_id = models
    # id_autor = models
    comment_text = models.CharField(max_length=250)
    comment_date = models.DateTimeField('date published')
    def __str__(self):
        return f'{self.comment_text}, {self.comment_date}'
    
class Email(models.Model):
    email_address = models.CharField(max_length=200)
    email_date = models.DateTimeField('date regist')
    def __str__(self):
        return f'{self.email_address}'
    
class FilmPage(models.Model):
    link_title = models.CharField(max_length = 100)
    title = models.CharField(max_length = 100)
    poster = models.CharField(max_length = 30)
    original_title = models.CharField(max_length = 100)
    release_date = models.CharField(max_length = 4)
    requirement_age = models.IntegerField()
    prod_date = models.CharField(max_length = 4)
    prod_country = models.CharField(max_length = 30)
    genre = models.CharField(max_length = 100)
    director = models.CharField(max_length=100)
    scenario = models.CharField(max_length=100)
    producer = models.CharField(max_length=100)
    operator = models.CharField(max_length=100)
    composer = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    mounting = models.CharField(max_length=100)
    budget = models.CharField(max_length=30)
    fees = models.CharField(max_length=30)
    time = models.TimeField(default="00:00:00")
    film_link = models.CharField(max_length=500)
    video_poster = models.CharField(max_length=30)
    def __str__(self):
        return f'{self.title}'