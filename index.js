class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }

    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}

const queue = new Queue()

queue.enqueue('i')
queue.enqueue('am')
queue.enqueue('fucked')

queue.dequeue()
queue.dequeue()

console.log(queue)







// const queue = []

// queue.push('i')
// queue.push('am')
// queue.push('fucked')

// queue.shift()
// queue.shift()

// console.log(queue)






// class Stack {
//     constructor() {
//         this.storage = {};
//         this.size = 0;
//     }

//     push(element) {
//         this.size++;
//         this.storage[this.size] = element;
//     }

//     pop() {
//         let removed = this.storage[this.size];
//         delete this.storage[this.size];
//         this.size--;
//         return removed
//     }

//     peek() {
//       return this.storage[this.size];  
//     }
// }

// const stack = new Stack();

// stack.push('i')
// stack.push('am')
// stack.push('fucked')

// stack.pop()

// stack.push('ironman')

// console.log(stack.peek())

// const stack = [];

// stack.push('dog')
// stack.push('cat')
// stack.push('bear')

// removes last item in stack
// stack.pop()

// peek
// console.log(stack[stack.length - 1])