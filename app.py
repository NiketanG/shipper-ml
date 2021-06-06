from os import stat
from flask.wrappers import Response
from detect import predictFromImage
import cv2
from flask import Flask, request, render_template
from PIL import Image
import io
import numpy as np

app = Flask(__name__, static_folder="./web/build/static", template_folder="./web/build")

@app.route("/")
def index():
    return render_template('index.html')


def image_to_byte_array(image: Image):
    imgByteArr = io.BytesIO()
    image.save(imgByteArr, format='PNG')
    imgByteArr = imgByteArr.getvalue()
    return imgByteArr


@app.route("/detect", methods=["POST"])
def detectShip():

    image = request.files["image"].read()
    img = Image.open(io.BytesIO(image))
    npImage = np.array(img)
    img = npImage.copy()

    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    res = predictFromImage(img)

    responseImage = cv2.cvtColor(res, cv2.COLOR_BGR2RGB)
    resNpImage = Image.fromarray(responseImage)
    encodedImage = image_to_byte_array(resNpImage)

    return Response(
        response=encodedImage,
        status=200,
        mimetype="image/jpeg"
    )
