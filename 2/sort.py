
import random
import time
# 下面是一个列表生成器
# def generatorList(count, rangeL, rangeR):
#     arr = []
#     for i in range(0, count):
#         r = random.randrange(rangeL, rangeR)
#         arr.append(r)
#     return arr


# result = generatorList(10000,0,10000)
result = [100,50,0]

# 下面是冒泡排序
# start_time = time.time()
# for j in range(0, len(result) - 1):
#     for i in range(0, len(result) - j - 1):
#         if result[i] < result[i + 1]:
#             result[i],result[i+1] = result[i+1],result[i]
# end_time = time.time()

# 下面是选择排序
# start_time = time.time()
# for j in range(0, len(result)):
#     x = j
#     for i in range(j + 1, len(result)):
#         if result[i] < result[x]:
#             x = i
#     result[j],result[x] = result[x],result[j]
# end_time = time.time()


# 下面是插入排序
# start_time = time.time()
# for i in range(1, len(result)):
#     for j in range(i, 0, -1):
#         if result[j]<result[j-1]:
#             result[j],result[j-1] = result[j-1],result[j]
#         else:
#             break
# end_time = time.time()

# print(end_time1-start_time1)

#下面是插入排序 优化方案
start_time = time.time()
for i in range(1, len(result)):
    e = result[i]
    j = i
    while result[j - 1] > e and j > 0:
        result[j] = result[j - 1]
        j -= 1
        
    result[j] = e

end_time = time.time()
    

print(end_time-start_time)





print(result)

