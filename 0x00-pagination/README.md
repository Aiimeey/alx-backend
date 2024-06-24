Pagination Project

This project focuses on implementing various pagination strategies for a dataset of popular baby names using Python. The goal is to create a Server class that supports simple pagination, hypermedia pagination, and deletion-resilient hypermedia pagination. Here's an overview of the implemented tasks:
Task 0: Simple Helper Function

    File: 0-simple_helper_function.py
    Description: Implements index_range function to calculate start and end indexes based on page and page_size parameters.

Task 1: Simple Pagination

    File: 1-simple_pagination.py
    Description: Adds Server class with get_page method to fetch a specific page of data from a CSV dataset of baby names. Handles edge cases with assertions.

Task 2: Hypermedia Pagination

    File: 2-hypermedia_pagination.py
    Description: Enhances Server class with get_hyper method to provide paginated data in a dictionary format, including metadata such as page size, current page number, total pages, and links to previous and next pages.

Task 3: Deletion-Resilient Hypermedia Pagination

    File: 3-hypermedia_del_pagination.py
    Description: Further extends Server class with get_hyper_index method to ensure robust pagination despite deletions from the dataset. It uses index-based pagination to maintain consistency across page transitions.

Each task builds upon the previous one, enhancing functionality and robustness of pagination methods, ensuring efficient data retrieval and resilience to changes in the dataset.
Repository Structure

    Repository: alx-backend
    Directory: 0x00-pagination

Usage

To utilize these pagination methods, instantiate the Server class and call the respective methods (get_page, get_hyper, get_hyper_index) with appropriate parameters. Ensure the CSV file Popular_Baby_Names.csv is accessible in the working directory.
Requirements

    Python 3.7 on Ubuntu 18.04 LTS
    Use of pycodestyle for code style compliance
    Documentation for all functions and modules
    Robust handling of pagination parameters and dataset changes

This project enhances understanding of pagination techniques in Python, demonstrating proficiency in handling data subsets efficiently.
