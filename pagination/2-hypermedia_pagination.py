#!/usr/bin/env python3
"""return a specify line from the data set"""
import csv
import math
from typing import List


def index_range(page, page_size):
    """function that return a tuple"""
    start = (page - 1) - page_size
    end = page * page_size
    return start, end


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
                count = sum(1 for row in reader)
            self.__dataset = dataset[1:]
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """function return the start and the end"""
        if (not isinstance(page, int) or not isinstance(page_size, int) or
           page <= 0 or page_size <= 0):
            raise AssertionError
        with open(self.DATA_FILE, 'r') as f:
            reader = csv.reader(f)
            count = sum(1 for row in reader)
        start, end = index_range(page, page_size)
        if count < end:
            return []
        else:
            return self.dataset()[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """function return a dictionary"""
        with open(self.DATA_FILE, 'r') as f:
            reader = csv.reader(f)
            count = sum(1 for row in reader)
        total_pages = int(count // page_size)
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None
        return {'page_size': page_size,
                'page': page,
                'data': self.get_page(page, page_size),
                'next_page': next_page,
                'prev_page': prev_page,
                'total_pages': total_pages}
