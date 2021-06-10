const { generateRandomArr,isSorted } = require('./utils');

const n = 10000
const list = generateRandomArr(n, n)
const list2 = [9,8,7,6,5,4,3,2,1,0]

// 未优化的选择排序
function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }

}

// 优化的选择排序，自左向右排
function selectionSort2(arr) {

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j
    }
    const temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
}

// 优化的选择排序，自右向左排
function selectionSort3(arr) {

  for (let i = arr.length - 1; i > 0; i--) {
    let maxIndex = i
    for (let j = i - 1; j >= 0; j--) {
      if(arr[maxIndex] < arr[j]) maxIndex = j
    }
    const temp = arr[i]
    arr[i] = arr[maxIndex]
    arr[maxIndex] = temp

  }
}

selectionSort2(list2)
console.log(list2)

