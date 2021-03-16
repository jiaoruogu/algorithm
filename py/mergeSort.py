
import math
def __merge(arr, l, mid,  r):

    copy_arr = []
    for x in range(l, r):
        copy_arr.append(arr[x])

    i = l
    j = mid + 1
    for k in range(l,r):
        if i > mid+1:
            arr[k] = copy_arr[j]
        elif j >= r:
            arr[k] = copy_arr[i]
        elif copy_arr[i] < copy_arr[j]:
            arr[k] = copy_arr[i]
            i += 1
        elif copy_arr[i] > copy_arr[j]:
            arr[k] = copy_arr[j]
            j += 1

def __mergeSort(arr, l, r):
    # 递归函数首先考虑递归条件0的情况
    if l >= r:
        return

    mid = int((l + r)/2)

    __mergeSort(arr, l, mid)
    __mergeSort(arr, mid+1, r)
    __merge(arr, l, mid, r+1)

def mergeSort(arr, n):

    __mergeSort(arr, 0, n-1)
    print(arr)


result = [9,8,7,6,5,4,3,2,1]

mergeSort(result,len(result))
