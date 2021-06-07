const generateRandomArr = (n, bound) => {
  const list = []
  for(let i=0;i < n;i++) {
    const rnd = Math.floor(Math.random() * bound + 1)
    list[i] = rnd
  }
  return list
}

const isSorted = (arr) => {

  for (let i = 1; i < arr.length; i++) {
    if(arr[i - 1] > arr[i]) return false
  }
  return true
}


module.exports = {
  generateRandomArr,
  isSorted,
}