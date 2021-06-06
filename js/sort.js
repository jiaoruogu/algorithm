


const list = [999999,4,2,6,113,6,78,345, 7,88888,1]

// 选择排序无优化
// for (let i = 0; i < list.length - 1; i++) {
//   for (let j = i + 1; j < list.length; j++) {
//     if (list[i] > list[j]) {
//       let temp = list[i]
//       list[i] = list[j]
//       list[j] = temp
//     }
//   }
// }

// 选择排序（有优化）
for (let i = 0; i < list.length; i++) {
  let minIndex = i
  for (let j = i; j < list.length; j++) {
    if (list[j] < list[minIndex]) {
      minIndex = j
    }
  }
  console.log(minIndex)
  let temp = list[i]
  list[i] = list[minIndex]
  list[minIndex] = temp
}



// 冒泡排序
// for (let i = 0; i < list.length; i++) {
//   for (let j = 0; j < list.length - i - 1; j++) {
//     if (list[j] > list[j + 1]) {
//       let temp = list[j]
//       list[j] = list[j + 1]
//       list[j + 1] = temp
//     }
//   }
// }



console.log(JSON.stringify(list))
