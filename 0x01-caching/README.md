Caching Algorithms Implementation

This repository contains Python implementations of various caching algorithms as part of an educational project. Each caching algorithm is implemented as a class inheriting from a base caching class (BaseCaching) and demonstrates different strategies for managing a cache to optimize data retrieval.
Implemented Caching Algorithms

    Basic Cache (BasicCache):
        Simple caching system without any limit.
        Supports put(key, item) and get(key) operations.

    FIFO Cache (FIFOCache):
        Uses the First-In-First-Out (FIFO) eviction strategy.
        Limits cache size to a predefined maximum (BaseCaching.MAX_ITEMS).
        Supports put(key, item) and get(key) operations.

    LIFO Cache (LIFOCache):
        Uses the Last-In-First-Out (LIFO) eviction strategy.
        Limits cache size to a predefined maximum (BaseCaching.MAX_ITEMS).
        Supports put(key, item) and get(key) operations.

    LRU Cache (LRUCache):
        Uses the Least Recently Used (LRU) eviction strategy.
        Limits cache size to a predefined maximum (BaseCaching.MAX_ITEMS).
        Supports put(key, item) and get(key) operations.

    MRU Cache (MRUCache):
        Uses the Most Recently Used (MRU) eviction strategy.
        Limits cache size to a predefined maximum (BaseCaching.MAX_ITEMS).
        Supports put(key, item) and get(key) operations.

    LFU Cache (LFUCache):
        Uses the Least Frequently Used (LFU) eviction strategy.
        Limits cache size to a predefined maximum (BaseCaching.MAX_ITEMS).
        Supports put(key, item) and get(key) operations.

Project Structure

    Each caching algorithm is implemented in its own Python file (0-basic_cache.py to 100-lfu_cache.py).
    The base_caching.py file contains the base caching class (BaseCaching) from which all caching algorithms inherit.

Getting Started

To use any of the caching algorithms:

    Clone this repository.
    Navigate to the directory of the specific caching algorithm you want to use.
    Run the main Python file associated with the algorithm (e.g., ./0-main.py for BasicCache).

Each main file (0-main.py to 100-main.py) demonstrates the usage and behavior of the respective caching algorithm.
Requirements

    Python 3.7 or higher
    All files should end with a newline.
    Follow PEP8 style guidelines (pycodestyle version 2.5).
    Ensure all files are executable.
    Include comprehensive documentation for all modules, classes, and functions.
