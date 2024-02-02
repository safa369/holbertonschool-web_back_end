#!/usr/bin/env python3
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
