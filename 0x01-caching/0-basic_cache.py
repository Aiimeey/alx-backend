#!/usr/bin/env python3
"""BasicCache Module
"""

from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """
    BasicCaching define.
    """

    def __init__(self):
        super().__init__()

    def put(self, key, item):
        """
        put key value to dict cache_data
        Args:
            key: the key of item.
            item: the value that stored.
        """
        if key and item:
            self.cache_data[key] = item

    def get(self, key):
        """
        get value of some item

        Args:
            key: the key of item

        return : item or None if dosn't exist.
        """
        value = None
        if key:
            value = self.cache_data.get(key, None)
        return value
