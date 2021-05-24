from django.db import models

# Create your models here.


class Task(models.Model):
    id = models.IntegerField(primary_key=True)
    task_name = models.CharField(max_length=160)
    completed = models.BooleanField()