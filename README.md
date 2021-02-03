
	$ sudo apt-get install virtualenv

	$ virtualenv env

	$ source env/bin/activate
	
	$ sudo apt-get install python3.6

	$ sudo apt-get install python3-pip

	$ pip3 install -r requirements.txt
	

	$ python3 manage.py makemigrations

	$ python3 manage.py migrate
	


	$ pip3 install opencv-python
	


	$ sudo su

	$ apt update && apt install -y libsm6 libxext6
	


	$ sudo apt-get install libxrender1

	$ exit
	


	$ cd home/model/SIH5/model/darknet/

	$ wget https://www.dropbox.com/s/55ykehj9kra2stt/yolov3-ship_1200.weights?dl=0 -O yolov3-ship_1200.weights
	


	$ make
	


get back to parent directory

	$ cd ../../../../../


to launch server execute the following

	$ python3 manage.py runserver
	

go to browser and type http://127.0.0.1:8000/demo


Upload an Image, Type 0.8 as the scale and submit.

It might take a minute or two based on your CPU. 
Now the model will start working !!
( Wait for 2 mins if your VM is working on a CPU )

And the ships in the image will be detected with their respective sizes !!

