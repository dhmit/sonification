# hard-coded data
square = [(0, 0), (0, 1), (1, 1), (1, 0)]


def angles_of_polygon(points):
    """
    Computes the internal angles of this polygon, in input order.
    :param points: A list of points representing a polygon.
    :return: A list of angles of this polygon.
    """
    pass


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
            side_lengths.append(((points[i + 1][0] - points[i][0]) ** 2 + (
                    points[i + 1][1] - points[i][1]) ** 2) ** (1 / 2))
        else:
            side_lengths.append(
                ((points[0][0] - points[i][0]) ** 2 + (points[0][1] - points[i][1]) ** 2) ** (
                        1 / 2))
    return side_lengths


def synthesize_polygon(points):
    """
    Synthesizes a polygon. The polygon is represented as a list of points
    where each point is a tuple of length 2.
    :param points: A list of points representing a polygon.
    :return: A numpy array which represents the sound.
    """
    pass
