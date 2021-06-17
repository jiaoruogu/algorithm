function defaultEquals(a, b) {
  return a === b
}

class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined

    this.equalsFn = equalsFn
  }


  push(element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }


  removeAt(index) {
    // 检查越界值
    if(index >= 0 && index < this.count) {
      let current = this.head

      // 移除第一项
      if (index === 0) {
        this.head = current.next
      } else {
        // let previous
        // for (let i = 0; i < index; i++) {
        //   previous = current
        //   current = current.next
        // }
        // 重构后
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }

  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  getHead() {
    return this.head
  }

  // 在任意位置插入元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  indexOf(element) {
    // 使用while循环迭代
    // let current = this.head, flag = true,index=0
    // while (index < this.count && flag) {
    //   if (this.equalsFn(element, current.element)) {
    //     flag = false
    //     return index
    //   } else {
    //     current = current.next
    //     index++
    //   }
    // }
    // return -1

    // 使用for循环
    let current = this.head
    for (let i = 0; i < this.count; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }
}

const list = new LinkedList()

list.push(10)
list.push(15)
list.push(16)
list.push(17)
list.push(18)

console.log(list.indexOf(15))
console.log(list.toString())
