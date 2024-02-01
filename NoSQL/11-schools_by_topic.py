#!/usr/bin/env python3
"""list of school"""


def school_by_topic(mongo_collection, topic):
    """function return a list of document"""
    return mongo_collection.find_one({"topics": topic})
