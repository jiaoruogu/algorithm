# 生成有n个元素的随机数组，每个数组的范围为[rangeL,rangeR]

import random

def sort_test_helper(sum, rangeL, rangeR):
    arr = []
    for x in range(0, sum):
        a = int(random.random() * (rangeR - rangeL + 1) + rangeL)
        arr.append(a)
    return arr