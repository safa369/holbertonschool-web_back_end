#!/usr/bin/env python3
"""model execute multiple coroutines"""
import asyncio
import typing
wait_random = __import__('0-basic_async_syntax').wait_random


async def task_wait_n(n: int, max_delay: int) -> typing.List[float]:
    """function that returns a list of n float """
    liss = []

    for _ in range(n):
        lis = await wait_random(max_delay)
        liss.append(float(lis))
    for j in range(n):
        min_x = j
        for y in range(min_x + 1, n):
            if liss[min_x] > liss[y]:
                liss[min_x], liss[y] = liss[y], liss[min_x]
    return liss
