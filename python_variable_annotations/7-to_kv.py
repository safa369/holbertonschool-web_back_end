#!/usr/bin/env python3
"""model of annotated function"""
import typing


def to_kv(k: str, v: typing.Union[int, float]) -> typing.Tuple[str, float]:
    """function that return a tuple"""
    tupl = (k, v*v)
    return tupl
