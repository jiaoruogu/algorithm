function factorial (n) {
  let result = 1
  while(n > 0) {
    result *= n
    n--
  }
  console.log(result);
  return result
}

// factorial(5)


function recursive(n) {

  if(n === 1 || n === 0) {
    return n
  }
  return n * recursive(n - 1)
}

console.log(recursive(5));


let test = [
  {
    a: 'a',
    children: [
      {
        a: 'b',
        children: [
          {
            a: 'c',
            children: [
              {
                a: 'd'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    a: 'e',
    children: [
      {
        a: 'f',
        children: [
          {
            a: 'g'
          }
        ]
      }
    ]
  },
  {
    a: 'h'
  }
]

// 使用递归的方式遍历一个树型结构
function ergodic(tree) {
  for (const item of tree) {
    // ...对item做一些操作
    item.add = 'hhhhhhhaaaaaa'
    if(item.children) {
      ergodic(item.children)
    }
  }
}

ergodic(test)
console.log(JSON.stringify(test, null, 2));