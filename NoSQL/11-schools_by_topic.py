#!/usr/bin/env python3
"""list of school"""

import pymongo


def school_by_topic(mongo_collection, topic):
    liste = [x for x in mongo_collection.find({"topics": topic})]
    return liste
