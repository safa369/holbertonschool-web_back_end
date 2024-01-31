#!/usr/bin/python3
"""measure runtime"""
import asyncio
import time
async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    t1 = time.time()
    awaitable = [async_comprehension() for _ in range(4)]
    result = await asyncio.gather(*awaitable, asyncio.sleep(10))
    t2 = time.time()
    print(t2 - t1)
