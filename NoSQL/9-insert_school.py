#!/usr/bin/env python3
"""function insert a new document"""

from bson.objectid import ObjectId
import pymongo


def insert_school(mongo_collection, **kwargs):
    """function return _id """
    new_colection = {}
    for key, value in kwargs.items():
        new_colection['key'] = 'value'
    result = mongo_collection.insert_one(new_colection)
    return result