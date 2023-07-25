let swap = require("./Swap").swap;

class MaxBinaryHeap {
    constructor(){
        this.values = []; 
    }

    insert(value){
        this.values.push(value);
        this.bubble();
    }

    bubble(){
        let index = this.values.length -1;
        let parentIndex = Math.floor((index-1)/2);
        while(this.values[parentIndex] < this.values[index]) {
            swap(this.values, index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index-1)/2);
        } 
    }

    extractMax(){
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

            let isLeftLarger = !(leftChildIndx >= this.values.length) && 
                ((this.values[leftChildIndx] > this.values[rightChildIndx] && 
                this.values[leftChildIndx] > this.values[parentIndex]) || rightChildIndx >= this.values.length);
            
            let isRightLarger = !(rightChildIndx >= this.values.length) && 
                ((this.values[rightChildIndx] > this.values[leftChildIndx] && 
                this.values[rightChildIndx] > this.values[parentIndex]) || leftChildIndx >= this.values.length);

            if(isLeftLarger){
                swap(this.values, leftChildIndx, parentIndex);
                parentIndex = leftChildIndx;
            } else if (isRightLarger){
                swap(this.values, rightChildIndx, parentIndex);
                parentIndex = rightChildIndx;
            } else {
                break;
            }
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(3);
heap.insert(43);
heap.insert(7);
heap.insert(100);
heap.insert(1);
heap.insert(55);

module.exports.heap = heap;