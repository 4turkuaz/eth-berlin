from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from ad_generator import AdGenerator  # Ensure this import matches your file structure

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

ad_generator = AdGenerator()


@app.route("/generateAds", methods=["POST"])
def generate_ads():
    data = request.get_json()
    search_data = data["searchData"]

    ads = ad_generator.generate_ads(search_data)
    return jsonify({"ads": ads})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
