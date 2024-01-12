#!/usr/bin/env python3
import asyncio
import typing
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> typing.List[float]:
    liss = []
    x = int(await wait_random(n))
    for _ in range(x):
        lis = await wait_random(max_delay)
        liss.append(float(lis))
    for j in range(x):
        min_x = j
        for y in range(min_x + 1, len(liss)):
            if liss[min_x] > liss[y]:
                liss[min_x], liss[y] = liss[y], liss[min_x]
    return liss
