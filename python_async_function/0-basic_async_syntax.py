#!/usr/bin/env python3
"""model of asynchronous coroutine"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """function that take an argument and return the random of it """
    x = random.uniform(0, max_delay)
    await asyncio.sleep(x)
    return x
