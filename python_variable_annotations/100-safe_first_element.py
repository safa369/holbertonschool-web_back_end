#!/usr/bin/env python3
"""safe first element"""
from typing import Any, Optional, Sequence


def safe_first_element(lst: Sequence[Any]) -> Optional:
    if lst:
        return lst[0]
    else:
        return None
