from utils.SortTestHelper import sort_test_helper

result = sort_test_helper(50, 0, 1000)

# 下面是冒泡排序
# for j in range(0, len(result) - 1):
#     for i in range(0, len(result) - j - 1):
#         if result[i] < result[i + 1]:
#             result[i],result[i+1] = result[i+1],result[i]

# 下面是选择排序
print(result)
for j in range(0, len(result)):
    x = j
    for i in range(j + 1, len(result)):
        if result[i] < result[x]:
            x = i
    result[j],result[x] = result[x],result[j]


print(result)
# print(result[x])
# print(min(result))

# for i in range(0, 3):
#     print(i)

