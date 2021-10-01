# hard-coded data
import math
import numpy as np

square = [(0, 0), (0, 1), (1, 1), (1, 0)]


def angles_of_polygon(points):
    """
    Computes the internal angles of this polygon, in input order.
    :param points: A list of points representing a polygon.
    :return: A list of angles of this polygon in degrees.
    """
    vectors = []
    angles = []
    for i in range(points-1):
        vectors.append(np.array[points[i+1][0]-points[i][0],points[i+1][1]-points[i][1]])

    for i in range(vectors-1):
        mag_v1 = (np.sqrt(vectors[i].dot(vectors[i])))
        mag_v2 = (np.sqrt(vectors[i+1].dot(vectors[i+1])))
        angles.append(math.acos(vectors[i].dot(vectors[i+1])/(mag_v1*mag_v2)))

    return angles





def sides_of_polygons(points):
    """
    Computes the side lengths of this polygon, in input order.
    :param points: A list of points representing a polygon.
    :return: A list of side lengths of this polygon.
    """
    pass


def synthesize_polygon(points):
    """
    Synthesizes a polygon. The polygon is represented as a list of points
    where each point is a tuple of length 2.
    :param points: A list of points representing a polygon.
    :return: A numpy array which represents the sound.
    """
    pass
