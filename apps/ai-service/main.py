from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/check")
def read_root():
    return {"Hello": "World"}

