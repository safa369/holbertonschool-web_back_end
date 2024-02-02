#!/usr/bin/env python3
"""module rerturn a tuple"""


def index_range(page, page_size):
    """function that return a tuple"""
    start = (page * page_size) - page_size
    end = page * page_size
    return(start, end)
