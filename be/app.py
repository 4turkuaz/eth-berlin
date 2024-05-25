from flask import Flask, request, jsonify
from flask_cors import CORS
from ad_generator import AdGenerator

app = Flask(__name__)
CORS(app) 

ad_generator = AdGenerator()

@app.route("/generateAds", methods=["POST"])
def generate_ads():
    data = request.get_json()
    search_data = data["searchData"]

    ads = ad_generator.generate_ads(search_data)
    return jsonify({"ads": ads})

@app.route("/search_history", methods=["POST"])
def search_history():
    data = request.get_json()
    history = data["history"]
    
    print("Received Search History:")
    for entry in history:
        print(entry)
    
    return jsonify({"status": "History received and printed"}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
