from backendspace.models import *
from rest_framework import serializers
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username', 'firstName', 'lastName']

class ExperimentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiment
        fields = '__all__'

class ProtocolsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Protocols
        fields = '__all__'

class LabGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = LabGroup
        fields = '__all__'

class GroupMembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupMembership
        fields = '__all__'
