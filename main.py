from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('Site_flask/')
def index():
    return render_template('index.html')

@app.route('Site_flask/about_us')
def about_us():
    return render_template('about-us.html')

@app.route('Site_flask/blog')
def blog():
    return render_template('blog.html')

@app.route('Site_flask/contacts')
def contacts1():
    return render_template('contacts.html')

@app.route('Site_flask/discounts')
def discounts():
    return render_template('discounts.html')

@app.route('Site_flask/price')
def price():
    return render_template('price.html')

@app.route('Site_flask/services')
def services():
    return render_template('services.html')

app.run(debug=True)
