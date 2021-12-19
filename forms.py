from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms import validators
from wtforms.fields.numeric import IntegerField
from wtforms.validators import Length, DataRequired




class SignUpForm(FlaskForm):
    name = StringField('Customer Name*', validators=[DataRequired(), Length(max = 20)])
    age = StringField('Enter your age*', validators=[DataRequired(), Length(max = 3)])
    mobile = StringField('Mobile Number*',validators=[DataRequired(), Length(max = 10)])
    destination = StringField('Destination*', validators=[DataRequired(), Length(max = 20)] )
    submit = SubmitField('Next')