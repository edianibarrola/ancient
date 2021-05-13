from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
class Site(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    country = db.Column(db.String(80), unique=False, nullable=True)
    continent = db.Column(db.String(80), unique=False, nullable=True)
    date_range_start = db.Column(db.String(80), unique=False, nullable=True)
    date_range_end = db.Column(db.String(80), unique=False, nullable=True)
    coords = db.Column(db.String(80), unique=False, nullable=True)
    details = db.Column(db.String(200), unique=False, nullable=True)
    img_url = db.Column(db.String(200), unique=False, nullable=True)
    map_link = db.Column(db.String(200), unique=False, nullable=True)
    

    def __repr__(self):
        return '<Site %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "country" : self.country,
            "continent": self.continent,
            "date_range_start": self.date_range_start,
            "date_range_end": self.date_range_end,
            "coords": self.coords,
            "details": self.details,
            "img_url": self.img_url,
            "map_link": self.map_link
            
        }