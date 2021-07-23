"""
Miscellaneous utility functions useful throughout the system
"""
from textwrap import dedent


def print_header(header_str):
    """
    Print a header -- mostly for our command line tools.
    """
    print(dedent(f'''
        ################################################################################
        # {header_str}
        ################################################################################'''))
