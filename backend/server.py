# backend/server.py

import os.path
from flask import Flask
from flask_cors import CORS


class BackApp(Flask):

  def __init__(self, *args, **kwargs):
    super().__init__(*args, **kwargs)
    CORS(self)

app = BackApp('back-app')

env = os.environ.get('APP_ENV', 'dev')
print(f'Strting application in {env} mode')
app.config.from_object(f'backend.{env}_setting')
