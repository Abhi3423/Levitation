from flask import Flask, render_template, redirect
from flask import request
from forms import SignUpForm
from log import * 
from alllot import *
from seat import *

name2 = ""
allot2 = ""

app = Flask(__name__)
app.config['SECRET_KEY'] = 'levetation'

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/pod_ticket', methods=['GET', 'POST'])
def index():
    global name2
    global allot2
    form = SignUpForm()
    if form.is_submitted():
       result= request.form
       name2 =request.form['name']
       age2 =request.form['age']
       mobile2 =request.form['mobile']
       destination2 =request.form['destination']
       entry(name2,age2,mobile2,destination2)
       allot2 = allot()
       print(allot2)
       #seat(allot2)
       return render_template('seat.html')
    return render_template('index.html', form=form)

@app.route('/print_ticket', methods=['GET', 'POST'])
def output():
    namet = name2
    allott = allot2
    return render_template('output.html', nameh=namet, alloth=allott)
    
@app.route('/pod_bay_ticket')
def rticket():
    form = SignUpForm()
    return render_template('reciever.html', form=form)

@app.route('/worker', methods=['GET', 'POST'])
def worker():
    form = SignUpForm()
    if form.is_submitted():
        result=request.form
        pod_d = request.form['name']
        return (pod_d)
    return render_template("worker.html", form=form)

@app.route('/no_work', methods=['GET', 'POST'])
def work():
    if request.method == 'POST':
        dataty = request.get_json()
        print(dataty)
        print(type(dataty))
    return render_template('booking.html')

if __name__ == '__main__':
    app.run()