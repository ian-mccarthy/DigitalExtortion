from flask import Flask, render_template, url_for

app = Flask(__name__)
app.config['SERVER_NAME'] = '127.0.0.1:5000'
app.static_folder = 'static'

@app.route('/')
def title_page():
	return render_template('title_page.html')

@app.route('/home')
def home():
	return render_template('home.html')

@app.route('/about')
def about():
	return render_template('about.html')

@app.route('/insights')
def insights():
	return render_template('insights.html')

@app.route('/resources')
def resources():
	return render_template('resources.html')

@app.route('/contact')
def contact():
	return render_template('contact.html')

if __name__ == '__main__':
	app.run(debug=True) 