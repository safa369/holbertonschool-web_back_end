#!/usr/bin/env python3
"""list of school"""

import pymongo


def school_by_topic(mongo_collection, topic):
    """function return a list of document"""
    myquery = {"topics": topic}
    liste = mongo_collection.find(myquery)
    return liste