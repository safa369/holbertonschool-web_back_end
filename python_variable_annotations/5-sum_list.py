#!/usr/bin/env python3
"""model for sum of list"""
import typing


def sum_list(input_list: typing.List[float]) -> float:
    """function that calcul the sum of list"""
    sum = 0
    for i in input_list:
        sum += i
    return sum
