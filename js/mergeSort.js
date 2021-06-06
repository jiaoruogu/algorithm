let list = [4,3,2,1]
// for(let i=0;i<100;i++){
//     list.unshift(i)
// }
function __merge(arr, l, mid, r){
    let aux = []
    for(let i=l;i<=r;i++){
        aux[i-l] = arr[i]
    }

    let i = l
    let j = mid + 1
    for(let k=l;k<=r;k++){

        if( i > mid ){  // 如果左半部分元素已经全部处理完毕
            arr[k] = aux[j-l]; 
            j++;
        }
        else if( j > r ){  // 如果右半部分元素已经全部处理完毕
            arr[k] = aux[i-l]; 
            i++;
        }
        else if( aux[i-l] < aux[j-l] ) {  // 左半部分所指元素 < 右半部分所指元素
            arr[k] = aux[i-l]; 
            i++;
        }
        else{  // 左半部分所指元素 >= 右半部分所指元素
            arr[k] = aux[j-l]; 
            j++;
        }
    }
}


function __mergeSort(arr, l, r){
    if(l >= r){
        return
    } 

    let mid = Math.floor((l + r) / 2)
    __mergeSort(arr, l, mid)
    __mergeSort(arr, mid+1, r)
    __merge(arr, l, mid, r)
    console.log(123)
}

function mergeSort(arr, n){
    __mergeSort(arr,0, n-1)
}
let start = new Date().valueOf()
mergeSort(list,list.length)
let end = new Date().valueOf()

console.log(list)
console.log(end - start)

