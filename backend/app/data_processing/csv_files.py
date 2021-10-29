"""

This module contains functions for transforming CSV file data into quantities
that we can plug into the parameters of our synthesis modules.

"""

import csv
import io


def parse_csv_upload(csv_upload, dictionary=True):
    """
    :param dictionary: True if we want dict representation of CSV, False for list representation
    :param csv_upload: client-submitted file expected to be in CSV format
    :return: a list of dictionaries mapping the CSV header data to values for each row
    """
    csv_str = csv_upload.read().decode('utf-8-sig')
    if dictionary:
        reader = csv.DictReader(io.StringIO(csv_str))
    else:
        reader = csv.reader(io.StringIO(csv_str))
    return list(reader)
