#!/usr/bin/env python3
"""function list all the dociuments in the collection"""

import pymongo


def list_all(mongo_collection):
    """function return a list """
    collect = mongo_collection.find({})
    return collect
