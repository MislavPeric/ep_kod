from django.utils.translation import deactivate
from rest_framework import viewsets, response
from .models import Task
from rest_framework.decorators import action
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes=[]

    @action(detail=False, methods=["GET"])
    def get_all(self, request):
        t = Task.objects.all()
        s = TaskSerializer(t, many=True)
        return response.Response(s.data)

    @action(detail=False, methods=["PUT"])
    def insert(self, request):
        t = Task(task_name=request["name"], completed=False)
        t.save()
        return response.Response('Saved')

    @action(detail=False, methods=["GET"])
    def check_all(self, request):
        t = Task.objects.all()
        for x in t:
            print(x)
            x.completed = True
            x.save()
        return response.Response('Changed')

    
    @action(detail=False, methods=["DELETE"])
    def delete_selected(self, request):
        Task.objects.filter(id=request.data["i"]).delete()
        return response.Response('Deleted')

    @action(detail=False, methods=["POST"])
    def change_selected(self, request):
        t = Task.objects.get(id=request.data["i"])
        t.completed = not t.completed
        t.save()
        return response.Response('Changed')