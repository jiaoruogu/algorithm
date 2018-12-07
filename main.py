from utils.SortTestHelper import sort_test_helper

result = sort_test_helper(100, 0, 100)


result.sort()
# for j in range(0, len(result) - 1):
#     for i in range(0, len(result) - j - 1):
#         if result[i] < result[i + 1]:
#             result[i],result[i+1] = result[i+1],result[i]

for x in result:
    print(x)
