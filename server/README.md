Set env vars: `source .env`
Run locally: `python main.py`

Build Image: `docker image build -t sumpixel-server .`
Run image: `docker run --name ss -p 5000:5000 -e PORT=5000 --env-file=.env sumpixel-server`