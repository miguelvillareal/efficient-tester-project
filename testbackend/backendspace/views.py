from django.shortcuts import render
from django.http import HttpResponse
from django.template import Context, loader
from json import dumps
from backendspace import calcTheGroups
from backendspace.models import Experiment, Protocols

def index(request):
    experiments = Protocols.objects.get(id=3)
    #number_tests = 10
    #number_positive = 1
    # 10 is number of tests
    # 1 is number of positives
    dividedGroup = calcTheGroups.sample_main(experiments.num_samples, int(float(experiments.suspected_pos_rate)))
    stageOne = dividedGroup["0"][0]
    print(experiments.suspected_pos_rate)
    print(experiments.num_samples)
    #array = [['B1', 'C1', 'D1', 'E1'], ['F1', 'G1', 'H1', 'A2', 'B2'], ['C2', 'D2', 'E2', 'F2', 'G2'], ['H2', 'A3', 'B3', 'C3', 'D3'], ['E3', 'F3', 'G3', 'H3', 'A4'], ['B4', 'C4', 'D4', 'E4', 'F4']]
    return render(request, "image.html", {'data': stageOne})
