#!/usr/bin/env python3
"""function list all the dociuments in the collection"""

import pymongo


def list_all(mongo_collection):
    collect = mongo_collection.find({})
    return collect
