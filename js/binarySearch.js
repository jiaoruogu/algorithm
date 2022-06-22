/**
 * 关于二查找的算法
 */

const list = []
for (let i = 0; i < 10000000; i++) {
    list.push(i)
}


// 递归实现二分查找
function binarySearch(arr, target, start, end) {
    start = start ?? 0
    end = end ?? arr.length - 1
    let mid = Math.floor((start + end) / 2)

    if (start <= end) {
        if (target < arr[mid]) {
            end = mid - 1
            return binarySearch(arr, target, start, end)
        } else if (target > arr[mid]) {
            start = mid + 1;
            return binarySearch(arr, target, start, end);
        } else {
            return mid
        }
    } else {
        return -1
    }
}

// 递归实现二分法查找，在没有找到指定元素的时，寻找距离该元素最近的一个，并返回其位置
function binarySearchForAlmost(arr, target, start, end) {
    start = start ?? 0
    end = end ?? arr.length - 1
  
    let mid = Math.floor((start+end) / 2)
    if (start < end) {
      if (target < arr[mid]) {
        end = mid - 1
        return binarySearch(arr, target, start, end)
      } else if (target > arr[mid]) {
        start = mid + 1;
        return binarySearch(arr, target, start, end)
      } else {
        return mid;
      }
    } else {
      if (start === end) {
        end = end + 1
      }
      let a = Math.abs(arr[start] - target);
      let b = Math.abs(arr[end] - target)
      return a > b ? end : start
    }
  }



// 循环实现二分查找
function binarySearch2(arr, target, start, end) {
    start = start ?? 0
    end = end ?? arr.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (target < arr[mid]) {
            end = mid - 1;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            return mid
        }
    }
    return -1
}




const start2 = Date.now()
console.log(binarySearch2(list,0))
const end2 = Date.now()
console.log(end2 - start2)






