from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)
with open('water_potability_rf_model.pickle', 'rb') as f:
    model = pickle.load(f)
FEATURES = ["Solids", "Turbidity", "Chloramines", "ph", "Trihalomethanes", "Hardness", "Sulfate", "Conductivity", "Organic_carbon"]

@app.route('/')
def home():
    return f"Model loaded and ready for prediction"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        input_data = [data[feature] for feature in FEATURES]
        prediction = model.predict([input_data])
        return jsonify({'prediction': prediction.tolist()})
    except KeyError as e:
        return jsonify({'error': f"Missing feature: {str(e)}"}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
