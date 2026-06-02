from fastapi import FastAPI
import json


app = FastAPI()




@app.get("/")
def home():
    return {"message" : "hello world"}


@app.get("/api")
def api():
    try:
        with open ('data.json', 'r') as file:
            data: list[dict] = json.load(file)
            return data
    except FileNotFoundError:
        print("error: file not found")
        return {}
    except json.JSONDecodeError:
        print("error: json returned corrupt or empty")
        return  {}