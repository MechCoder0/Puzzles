let swap = require("./Swap").swap;

class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class MaxBinaryHeap {
    constructor(){
        this.values = []; 
    }

    enqueue(priority, value){
        this.values.push(new Node(value, priority));
        this.bubble();
    }

    bubble(){
        let index = this.values.length -1;
        let parentIndex = Math.floor((index-1)/2);
        while(parentIndex >=0 && this.values[parentIndex].priority 
            > this.values[index].priority) {
            swap(this.values, index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index-1)/2);
        } 
    }

    dequeue(){
        swap(this.values, 0, this.values.length - 1);
        const root = this.values.pop(); 
        this.sink();
        return root;
    }

    sink(){
        let parentIndex = 0;
        while(parentIndex <= this.values.length - 1){
            let leftChildIndx = parentIndex*2 +1;
            let rightChildIndx = parentIndex*2 +2;

            let isLeftHigherPriority = !(leftChildIndx >= this.values.length) && 
                ((this.values[leftChildIndx].priority < this.values[rightChildIndx].priority && 
                this.values[leftChildIndx].priority < this.values[parentIndex].priority) || rightChildIndx >= this.values.length);
            
            let isRightHigherPriority = !(rightChildIndx >= this.values.length) && 
                ((this.values[rightChildIndx].priority < this.values[leftChildIndx].priority && 
                this.values[rightChildIndx].priority < this.values[parentIndex].priority) || leftChildIndx >= this.values.length);

            if(isLeftHigherPriority){
                swap(this.values, leftChildIndx, parentIndex);
                parentIndex = leftChildIndx;
            } else if (isRightHigherPriority){
                swap(this.values, rightChildIndx, parentIndex);
                parentIndex = rightChildIndx;
            } else {
                break;
            }
        }
    }
}

let heap = new MaxBinaryHeap();
heap.enqueue(3, 34);
heap.enqueue(43,4);
heap.enqueue(7, "hello");
heap.enqueue(100, 'asdf');
heap.enqueue(1, 234);
heap.enqueue(55,5);
console.log(heap.dequeue());
console.log(heap.values);
module.exports.heap = heap;