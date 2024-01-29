#!/usr/bin/env python3
"""model of async comprehension"""
import asyncio
import random
import typing

async_generator = __import__("0-async_generator").async_generator


async def async_comprehension() -> typing.Generator[float, None, None]:
    res = []
    async for result in async_generator():
        res.append(result)
    print(res)
