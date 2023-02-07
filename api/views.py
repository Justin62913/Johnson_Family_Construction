
from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from .serializers import ProjectsSerializer
from .models import Projects
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly


# Create your views here.
class ProjectsView(viewsets.ModelViewSet):
    permission_class = [IsAuthenticatedOrReadOnly]
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ProjectsDetail(request, pk):
    project = Projects.objects.get(id=pk)
    serializer = ProjectsSerializer(project, many=False)
    return Response(serializer.data)










