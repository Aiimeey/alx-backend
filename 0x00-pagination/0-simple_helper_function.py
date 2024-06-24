#!/usr/bin/env python3

"""
This module for task 0
method:
    index_range:
        Write a function named index_range that
            takes two integer arguments page and page_size.
"""
from typing import Tuple


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
