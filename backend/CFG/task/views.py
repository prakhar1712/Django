from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import TaskSerializer
from rest_framework.response import Response
import json
from .models import Task
from django.utils import timezone
# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getall(request):
    user = request.user
    notes = user.task_set.all()
    serializer = TaskSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create(request):
    try:
        user = request.user
        data = json.loads(request.body)
        title = data.get('title')
        description = data.get('description')
        task = Task.objects.create(
            username=user, title=title, description=description, date=timezone.now())
        print(task)
        return Response("CREATED TASK")
    except Exception as e:
        return Response({'error': str(e)})