# Shipper-ml

Machine Learning Model for Detecting ships from Satellite Image


### Requirements

- Python 3.6+
- virtual-env
- make

### Installation Steps

Create a virtual environment
```
virtualenv venv

#OR

python -m venv venv
```

Activate the environment

```
source venv/bin/activate
```


Install requirements
```
pip3 install -r requirements.txt
```

Install & Configure Darknet along with its weights

```
cd home/model/shipper/model/darknet/

wget https://www.dropbox.com/s/55ykehj9kra2stt/yolov3-ship_1200.weights?dl=0 -O yolov3-ship_1200.weights

make
```

Launch the Server (run in the parent directory)
```
python3 manage.py runserver
```
	
The API will be running on [http://localhost:8000/demo](http://localhost:8000/demo) 

Upload an Image, Type 0.8 as the scale and submit.

It might take a minute or two based on your CPU. 
The model will identify the ships and display the results. 
