"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Site
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/api/site', methods=['GET'])
def get_all_sites():
    all_sites= Site.query.all()
    all_sites = list(map(lambda x: x.serialize(), all_sites))
    
    return jsonify(all_sites), 200

@api.route('/site/<int:id>', methods=['GET'])
def get_one_sites(id):
    one_site= Site.query.get(id).serialize()
    
    response_body = {
        "msg": "Here is the requested Site."
    }
    return jsonify(one_site), 200