const { generateRandomArr,isSorted } = require('./utils');

const n = 100000
const list = generateRandomArr(n, n)
const list2 = [9,8,7,6,5,4,3,2,1,0]



function insertionSort(arr) {

  for(let i=0;i<arr.length;i++){
    for(let j =i; j-1 >= 0;j--){
      console.log(123);

      if(arr[j] < arr[j-1]) {
        const temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
      } else break
    }
  }
}

function insertionSort2(arr) {

  for(let i=0;i<arr.length;i++){
    for(let j =i; j-1 >= 0 && arr[j] < arr[j-1];j--){
        const temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
    }
  }
}


function insertionSort3(arr) {

  for (let i = 0; i < arr.length; i++) {

    let t = arr[i]
    let j
    for(j = i; j-1>=0 && t > arr[j -1];j--){
        arr[j] = arr[j-1]
    }

    arr[j] = t

  }

}


function insertionSort4(arr) {
  // [0,i)
  for(let i = arr.length - 1; i >=0; i--) {
    for(let j = i; j + 1 <= arr.length-1; j++){
      if(arr[j] > arr[j+1]) {
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      } else break
    }
  }
}

function insertionSort5(arr) {

  for (let i = arr.length - 1; i >= 0; i--) {
    let t = arr[i]
    let j
    for (j = i; j + 2 <=arr.length && t > arr[j+1];j++) {
      arr[j] = arr[j+1]
    }
    arr[j] = t
  }
}



const startTime = new Date().getTime()
insertionSort5(list2)
const endTime = new Date().getTime()

console.log(isSorted(list2));
console.log(list2);

console.log((endTime-startTime) / 1000);
