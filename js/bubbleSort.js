const { generateRandomArr,isSorted } = require('./utils');

const n = 100000
const list = generateRandomArr(n, n)

const list2 = [5,4,3,2,1]

// 循环不变量 [0,i]
function sort1 (arr) {
  for(let i=0;i<arr.length;i++) {
    for(let j = 0; j< arr.length - i -1; j++) {
      if(arr[j] > arr[j+1]) swap(arr, j, j+1)
    }
  }
}

// 循环不变量[i,n)
function sort2 (arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = arr.length - 1; j>i; j--) {
      if(arr[j] < arr[j - 1]) swap(arr, j, j - 1)
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


const startTime = new Date().getTime()
sort2(list2)
const endTime = new Date().getTime()

console.log(isSorted(list2));
console.log(list2);

console.log((endTime-startTime) / 1000);
