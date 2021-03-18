const list = [1,3,[3,4,[5,6,[7,8,[9,[12,15,16,89,['test']]]]]],['end',[100]]]
// es6的扁平化api
const result = list.flat(Infinity)
console.log(result);


// stringify之后使用正则
const str = `[${JSON.stringify(list).replace(/(\[|\])/g, '')}]`
console.log(JSON.parse(str));


// 使用递归
function flat1 (arr) {
  let result = []
  for(const item of arr) {
    Array.isArray(item) ? result = result.concat(flat1(item)) : result.push(item)
  }
  return result
}

console.log(flat1(list));


// 使用reduce递归
function flat2 (arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flat2(cur) : cur)
  }, [])
}

console.log(flat2(list));


// 迭代 
function flat3(arr) {
  while(arr.some(Array.isArray)) {
    arr = Array.prototype.concat.apply([], arr)
  }
  return arr
}

console.log(flat3(list));