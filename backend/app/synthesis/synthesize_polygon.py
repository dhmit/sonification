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
    points.append(points[0])  # Polygon need to be closed shape.
    vectors = []
    angles = []

    for i in range(len(points) - 1):
        arr = [points[i + 1][0] - points[i][0], points[i + 1][1] - points[i][1]]
        vectors.append(np.array(arr))

    vectors.append(vectors[0])  # Polygon need to be closed shape.

    for i in range(len(vectors) - 1):
        mag_v1 = (np.sqrt(vectors[i].dot(vectors[i])))
        mag_v2 = (np.sqrt(vectors[i + 1].dot(vectors[i + 1])))
        angles.append(math.acos(vectors[i].dot(vectors[i + 1]) / (mag_v1 * mag_v2)))

    rad_to_deg = map(lambda x: x * 180 / math.pi, angles)
    angles = list(rad_to_deg)

    return angles


print(angles_of_polygon(square))


def change_in_frequency(angles):
    """
        Maps angles of the polygon, in input order, to frequency.
        :param angles: A list of angles of a polygon.
        :return: A list of frequencies.
        """
    return [180 / theta for theta in angles]


def sides_of_polygons(points):
    """
    Computes the side lengths of this polygon, in input order.
    :param points: A list of points representing a polygon.
    :return: A list of side lengths of this polygon.
    """
    pass
    side_lengths = []
    for i in range(len(points)):
        if i < len(points) - 1:
            side_lengths.append(((points[i + 1][0] - points[i][0]) ** 2 +
                                 (points[i + 1][1] - points[i][1]) ** 2) ** (1 / 2))
        else:
            side_lengths.append(((points[0][0] - points[i][0]) ** 2 +
                                 (points[0][1] - points[i][1]) ** 2) ** (1 / 2))
    return side_lengths


def synthesize_polygon(points):
    """
    Synthesizes a polygon. The polygon is represented as a list of points
    where each point is a tuple of length 2.
    :param points: A list of points representing a polygon.
    :return: A numpy array which represents the sound.
    """
    pass
