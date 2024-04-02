from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

API_URL = "https://api-inference.huggingface.co/models/google/flan-t5-base"
headers = {"Authorization": "Bearer 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"}


def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()


@app.route("/")
def index():
    return render_template("conversation.html")


@app.route("/query", methods=["POST"])
def get_query():
    input_data = request.json["user_input"]
    payload = {"inputs": input_data}
    output = query(payload)
    return jsonify({"output": output})


if __name__ == "__main__":
    app.run(debug=True)
