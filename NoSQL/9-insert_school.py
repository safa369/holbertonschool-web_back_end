#!/usr/bin/env python3
"""function insert a new document"""


def insert_school(mongo_collection, **kwargs):
    """function return _id """
    new_col = mongo_collection.insert(kwargs)
    return new_col
