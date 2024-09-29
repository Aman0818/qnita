from flask import Flask, render_template
app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/aboutUs')
def aboutUs():
    return render_template('aboutUs.html')

@app.route('/parrticipatingInsti')
def parrticipatingInsti():
    return render_template('parrticipatingInsti.html')

if __name__ == '__main__':
    app.run(debug=False)
