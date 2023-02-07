from rest_framework.serializers import ModelSerializer
from .models import Projects


class ProjectsSerializer(ModelSerializer):
    class Meta:
        model = Projects
        fields = ['id', 'image', 'thumb', 'title', 'description', 'updated', 'created']










