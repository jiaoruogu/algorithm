# 生成有n个元素的随机数组，每个数组的范围为[rangeL,rangeR]

import random

def sort_test_helper(sum, rangeL, rangeR):
    arr = []
    for x in range(0, sum):
        '''
        当然python取随机数有现成的api
        random.randint(a, b)，用于生成一个指定范围内的整数，其中参数a是下限，参数b是上限，生成的随机数n: a <= n <= b
        '''
        a = int(random.random() * (rangeR - rangeL + 1) + rangeL)
        arr.append(a)
    return arr
