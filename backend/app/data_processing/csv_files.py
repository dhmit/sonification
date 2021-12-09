"""

This module contains functions for transforming CSV file data into quantities
that we can plug into the parameters of our synthesis modules.

"""

import csv
import io


def parse_csv_str_as_floats(csv_str):
    reader = csv.reader(csv_str)
    float_list = []
    for row in reader:
        try:
            cols = [float(x) for x in row]
            float_list.append(cols)
        except ValueError:
            # TODO(ra): this is not real error handling, but for now we just ignore headers.
            #           We really want to detect a header row, and also detect columns that aren't
            #           numeric values, and do something better.
            pass

    return float_list


def parse_csv_upload_as_floats(csv_upload):
    """
    :param csv_upload: client-submitted file expected to be in CSV format
    :return: a list of lists, where each inner list represents a row
    """
    csv_str = csv_upload.read().decode('utf-8-sig')
    return parse_csv_str_as_floats(csv_str)
