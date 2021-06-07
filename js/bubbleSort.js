const { generateRandomArr,isSorted } = require('./utils');

const n = 100000
const list = generateRandomArr(n, n)

const list2 = [5,4,3,2,1]

function sort1 (arr) {
  for(let i=0;i<arr.length;i++) {
    for(let j = 0; j< arr.length - i -1; j++) {
      if(arr[j] > arr[j+1]) swap(arr, j, j+1)
    }
  }
}

function sort2 (arr) {
  for(let i = arr.length - 1; i >= 0; i--) {
    for(let j = i; j>=0; j--) {
      
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


const startTime = new Date().getTime()
sort1(list)
const endTime = new Date().getTime()

console.log(isSorted(list));
console.log((endTime-startTime) / 1000);