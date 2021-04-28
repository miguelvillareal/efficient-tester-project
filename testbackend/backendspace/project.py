import numpy as np
import json
import os
from PIL import Image, ImageTk, ImageDraw, ImageFont
from collections import Counter
import markdown
import os
import codecs
import pdfkit
import datetime


head = """<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<style type="text/css">
code {
  color: inherit;
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
</head>
<body>
"""

foot = """
</body>
</html>
"""

def delete_all():
    os.remove(os.getcwd()+"/"+"markdown.md")
    for i in os.listdir(os.getcwd()):
        if(str(i).endswith(".png") or str(i).startswith("result_note")):
            os.remove(os.getcwd()+"/"+str(i))



def markdown2html(markdowm_name):
    fp1 = codecs.open(markdowm_name, mode="r", encoding="utf-8")
    text = fp1.read()
    html = markdown.markdown(text)
    fp1.close()
    return html

def save_markdown(markdown_txt,markdown_title, markdown_pic):
    with open("markdown.md", "a+", encoding='utf-8') as f:
        text = '##'+markdown_title + '\n'
        print(markdown_title)
        text = text +'![img](' + markdown_pic + ')' + '\n<br/>\n'
        f.write(text)


def save_wellplate(key, jsons, cnt):
    markdown_txt = ''
    markdown_pic = ''

    mycircle_dict = {}
    char_list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    for char in char_list:
        for num in range(1, 13):
            x1 = 92 + (num - 1) * 120
            x2 = 210 + (num - 1) * 118
            y1 = 73 + (ord(char) - ord('A')) * 116
            y2 = 186 + (ord(char) - ord('A')) * 117
            mycircle_dict[char + str(num)] = [(x1, y1), (x2, y2)]

    if os.path.exists("result_note_" + str(cnt) + ".txt"):
        with open("result_note_" + str(cnt) + ".txt", "r", encoding='utf-8') as f:
            text = f.read()
        if text == "":
            text = {}
        else:
            text = json.loads(text)
        text[key] = json.loads(jsons)
        with open("result_note_" + str(cnt) + ".txt", "w", encoding='utf-8') as f:
            markdown_txt = json.dumps(text[key])
            f.write(json.dumps(text))

    else:
        with open("result_note_" + str(cnt) + ".txt", "w", encoding='utf-8') as f:
            text = {}
            text[key] = json.loads(jsons)
            markdown_txt = json.dumps(text[key])
            f.write(json.dumps(text))
    im = Image.open('project.jpg')
    imageDrawn = ImageDraw.Draw(im, 'RGBA')
    jsons = jsons.replace('\'', "\"")

    print("THIS IS \n\n" + jsons)
    jsons = json.loads(jsons)
    jsons = json.loads(jsons)
    print(jsons)

    if (jsons['current_interaction']['step_num'] == 1):
        bule_list = jsons['current_interaction']['currentlySelectedAll']
        red = jsons['current_interaction']['selectedPositive']
        gary = jsons['current_interaction']['listOfAllCompleted']
        gary_list = []
        for item in gary:
            for i in item:
                gary_list.append(i)
        red_list = [i for i in red if (i in gary_list and i in bule_list)]



    elif (jsons['current_interaction']['step_num'] == 2):
        bule_list = ['A1']
        bule = jsons['current_interaction']['currentlySelectedAll']
        ctnt = 0
        for bl in bule:
            if(ctnt<2):
                if(bl=='A1'):
                    ctnt = ctnt + 1
                continue
            else:
                bule_list.append(bl)

        red = jsons['current_interaction']['selectedPositive']
        gary = jsons['current_interaction']['listOfAllCompleted']
        gary_list = []
        for item in gary:
            for i in item:
                gary_list.append(i)
        red_list = [i for i in red if (i in gary_list and i in bule_list)]
    else:
        bule_list = ['A1']
        bule = jsons['current_interaction']['currentlySelectedAll']
        ctnt = 0
        for bl in bule:
            if(ctnt<3):
                if(bl=='A1'):
                    ctnt = ctnt + 1
                continue
            else:
                bule_list.append(bl)

        red = jsons['current_interaction']['selectedPositive']
        gary = jsons['current_interaction']['listOfAllCompleted']
        gary_list = []
        for item in gary:
            for i in item:
                gary_list.append(i)
        red_list = [i for i in red if (i in gary_list and i in bule_list)]

    buleColor = (0, 128, 192, 155)
    grayColor = (216, 191, 216, 155)

    for bule in bule_list:
        imageDrawn.ellipse(mycircle_dict[bule], fill=buleColor, outline="black")
    for gray in gary_list:
        imageDrawn.ellipse(mycircle_dict[gray], fill=grayColor, outline="black")
    for red in red_list:
        imageDrawn.ellipse(mycircle_dict[red], fill=red, outline="black")

    markdown_pic = 'wellPlate' + str(cnt) + '.png'
    markdown_title = 'Step: {} ,Group: {}\n{}:\n'.format(jsons['current_interaction']['step_num'],jsons['current_interaction']['currentGroup'],key)
    save_markdown(markdown_txt,markdown_title, markdown_pic)

    im.save('wellPlate' + str(cnt) + '.png')

def generatePdf(test_dict):
    cnt = 0
    result = json.loads(test_dict)
    for i in result:
        cnt = cnt + 1
        print(result[i])
        save_wellplate(i, json.dumps(str(result[i])), cnt)
    html = markdown2html("markdown.md")
    html = html.replace("src=\"", "height=\"300\" width=\"500\" src=\"file:///" + os.getcwd() + "\\")
    wkhtmltopdf_options = {
        'enable-local-file-access': None
    }
    confg = pdfkit.configuration(wkhtmltopdf='/Users/miguelvillareal/Desktop/Capstone/Backend/testbackend/backendspace/wkhtmltox/bin/wkhtmltopdf.exe')
    time1 = datetime.datetime.now()
    time_str = datetime.datetime.strftime(time1, '%Y%m%d%H%M%S')
    pdfkit.from_string(html, 'markdown_' + str(time_str) + '.pdf', configuration=confg, options=wkhtmltopdf_options)
    delete_all()
    return 'markdown_' + str(time_str) + '.pdf'


if __name__ == '__main__':
    # ## A1
    # mycircle = [(92, 73), (210, 186)]
    # ## B1
    # mycircle = [(92, 189), (210, 303)]
    # ## C1
    # mycircle = [(92, 306), (210, 421)]
    # ## A2
    # mycircle = [(212, 73), (328, 186)]
    # ## A3
    # mycircle = [(331, 73), (447, 186)]
    with open("example.txt", 'r') as f:
        test_dict = f.read()

    test = generatePdf(test_dict)
    print(test)
