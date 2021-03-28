from django.shortcuts import render
from django.http import HttpResponse
from django.template import Context, loader
from json import dumps
from backendspace import calcTheGroups
from backendspace.models import Experiment, Protocols
import json
import math

def index(request):
    protocolId = request.GET["id"]
    protocols = Protocols.objects.get(id = int(protocolId))
    experimentId = request.GET["exp"]
    experiments = Experiment.objects.get(id = experimentId)


    numberPosWells = math.ceil(float(protocols.suspected_pos_rate)/100 * protocols.num_samples)
    dividedGroup = calcTheGroups.sample_main(protocols.num_samples, numberPosWells)
    myDict = json.loads(experiments.current_interaction)
    if bool(myDict) == False:
        myDict["wellPlate"] = 1
        myDict["pythonDictAllStages"] = dividedGroup
        myDict["currentlySelectedAll"] = []
        myDict["listOfAllCompleted"] = []
        myDict["currentlySelectedGroup"] = []
        myDict["selectedPositive"] = []
        myDict["currentGroup"] = 1
    experiments.current_interaction = json.dumps(myDict)

    data = {}
    #data["id"] = str(experiments.id)
    #data["completed_status"] = str(experiments.completed_status)
    data["user_notes"] = experiments.user_notes
    data["step_num"] = experiments.step_num
    data["protocol_used"] = protocolId
    #data["date_last_accessed"] = str(experiments.date_last_accessed)
    data["current_interaction"] = experiments.current_interaction
    #array = [['B1', 'C1', 'D1', 'E1'], ['F1', 'G1', 'H1', 'A2', 'B2'], ['C2', 'D2', 'E2', 'F2', 'G2'], ['H2', 'A3', 'B3', 'C3', 'D3'], ['E3', 'F3', 'G3', 'H3', 'A4'], ['B4', 'C4', 'D4', 'E4', 'F4']]
    return render(request, "image.html", {'data': data})
