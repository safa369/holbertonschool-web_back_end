#!/usr/bin/env python3
"""function insert a new document"""

from bson.objectid import ObjectId
import pymongo


def insert_school(mongo_collection, **kwargs):
    """function return _id """
    new_collection = {}
    for key, value in kwargs.items():
        new_collection['key'] = 'value'
    result = mongo_collection.insert_one(new_collection)
    return new_collection.inserted_id
