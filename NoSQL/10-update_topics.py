#!/usr/bin/env python3
"""update topics based on the name"""

import pymongo


def update_topics(mongo_collection, name, topics):
    """update topics"""
    myquery = {"name": name}
    new_values = {"$set": {"topics": topics}}
    mongo_collection.update_many(myquery, new_values)
