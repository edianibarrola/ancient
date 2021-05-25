"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Site
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token


api = Blueprint('api', __name__)


@api.route('/token', methods=['POST'])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(username=username, password=password).first()
    if user is None:
        return jsonify({"msg": "Bad usernme or password"}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "user_id": user.id})

    

@api.route('/site', methods=['GET'])
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