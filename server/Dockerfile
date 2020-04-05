FROM python:3

COPY credentials.json /usr/src/app/credentials.json
COPY requirements.txt /usr/src/app/requirements.txt
COPY main.py /usr/src/app/main.py

WORKDIR /usr/src/app

RUN pip3 install -r requirements.txt
CMD python3 main.py