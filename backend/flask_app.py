import datetime
from head import header
from flask import Flask, jsonify, request

app = Flask(__name__)

y = [
	"Nutrient-Rich Dishes",
	"Nutrient-Rich Dishes",
	"Nutrient-Rich Dishes",
	"Nutrient-Rich Dishes",
	"Nutrient-Rich Dishes",
]

x = [
	"Nutrient-Rich Foods",
	"Nutrient-Rich Foods",
	"Nutrient-Rich Foods",
	"Nutrient-Rich Foods",
	"Nutrient-Rich Foods",
	"Nutrient-Rich Foods",
	"Nutrient-Rich Foods",
	"Nutrient-Rich Foods",
	"Nutrient-Rich Foods",
	"Nutrient-Rich Foods"
]
z=[x,y]
@app.route('/data', methods=['GET', 'POST'])
def data():
    global x,y,z
    if request.method == 'POST':
        print("POST")
        request_data = request.get_json()
        print(request_data)
		#  proteins_100g: 14.6;carbohydrates_100g: 67.4;fat_100g: 6.4
        if request_data['proteins_100g'] == '' and request_data['fat_100g'] == '' and request_data['carbohydrates_100g'] == '':
            print("No data")
        else:
            
            x ,y= header(request_data)
            z=[x,y]
    elif request.method == 'GET':
        
        return z


if __name__ == '__main__':
    # app.run(debug=True)
    app.run(debug=True)
