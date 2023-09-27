FROM selenium/standalone-chrome

USER root
RUN apt-get update && apt-get install python3-distutils -y
RUN wget https://bootstrap.pypa.io/get-pip.py
RUN python3 get-pip.py
RUN python3 -m pip install pipenv
WORKDIR /app/scrapper
RUN pip install pipenv

COPY Pipfile .
COPY Pipfile.lock .
RUN pipenv install --verbose
COPY . .

CMD ["pipenv", "run", "python3", "main.py"]
