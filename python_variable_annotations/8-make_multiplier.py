#!/usr/bin/env python3
"""model of complex types - function"""
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """function take a float as arg and return a function"""
    def make_multiplier_m(x: float) -> float:
        return (multiplier * x)
    return make_multiplier_m
