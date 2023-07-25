class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if (this.root === null){
            this.root = newNode;
        } else {
            let current = this.root;
            while(true){
                if (value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        break;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value){
        let current = this.root;
        let found = false;
        while (!found && current != null) {
            if(current.value === value){
                found = true;
            } else if(value > current.value ){
                current = current.right;
            } else {
                current = current.left; 
            }
        }
        return current;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(7);
tree.insert(15);
tree.insert(17);
tree.insert(12);

module.exports.tree = tree;