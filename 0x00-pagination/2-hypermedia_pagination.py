#!/usr/bin/env python3
"""this module for task 1"""
import csv
import math
from typing import List, Tuple, Dict, Union


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
            self.__dataset = dataset[1:]

        return self.__dataset

    @staticmethod
    def index_range(page: int, page_size: int) -> Tuple[int, int]:
        """
        Calculate the start and end indexes for pagination.
        Args:
            page <int>: the current page number (1-indexed).
            page_size <int>: The number of items per page.
        return:
            <Tuple[int, int]> of size two containing
                start index and an end index
        """
        return (
            (page - 1) * page_size,
            ((page - 1) * page_size) + page_size
            )

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        get page using simple pagination.

        Args:
            page <int> 1 as default: the current page number (1-indexed).
            page_size <int> 10 as default: The number of items per page.

        return:
            <list[list]> list data in list
        """
        assert isinstance(page, int) and isinstance(page_size, int)
        assert page > 0 and page_size > 0

        data = self.dataset()
        start, end = Server.index_range(page, page_size)
        return [] if start > len(data) else data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        get hyper using simple pagination.

        Args:
            page <int> 1 as default: the current page number (1-indexed).
            page_size <int> 10 as default: The number of items per page.

        return:
            <dict{key, value}> : a dict represent a hypermedia.
        """
        data = self.get_page(page, page_size)
        total_page = len(self.__dataset) / page_size
        start, end = Server.index_range(page, page_size)
        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': page + 1 if end < len(self.__dataset) else None,
            'prev_page': page - 1 if start > 0 else None,
            'total_pages': math.ceil(total_page)
        }
