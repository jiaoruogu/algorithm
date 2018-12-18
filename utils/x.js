

// var arr = [3,7,2,7,2,1,0,5555,2]
function generatorArr(count, rangeL, rangeR){
    let arr = []
    for(let i=0;i<count;i++){
        let r = Math.floor(Math.random() * (rangeR - rangeL + 1)) + rangeL
        arr.push(r)
    }
    return arr
}

var arr = generatorArr(10000,0,100000)
// let start_time = new Date().getTime()
// for(let i=0;i<arr.length;i++){
// let tempIndex = i
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j] < arr[tempIndex]){
//             tempIndex = j
//         }
//     }
//     let temp = arr[tempIndex]
//     arr[tempIndex] = arr[i]
//     arr[i] = temp
    
// }
// let end_time = new Date().getTime()
            
let start_time = new Date().getTime()
for(let i=1;i<arr.length;i++){
    let e = arr[i]
    var j
    for(j=i;i>0;j--){
        if(arr[j-1]>e){
            arr[j] = arr[j-1]
        }else{
            break
        }
    }
    arr[j] = e
}
let end_time = new Date().getTime()



console.log(arr)
console.log(end_time - start_time)

