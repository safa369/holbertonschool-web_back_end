#!/usr/bin/env python3
"""model for mixed list"""
import typing


def sum_mixed_list(mxd_lst: typing.List[typing.Union[int, float]]) -> float:
    """function that return the sum of list"""
    sum = 0
    for i in mxd_lst:
        sum += i
    return sum
