let tree = require("./trees").tree;

function breadthFirstSearch (tree){
    let queue = [];
    let values = [];

    queue.push(tree.root);
    while (queue.length !== 0){
        let current = queue.shift();
        values.push(current);
        if(current.left != null) queue.push(current.left);
        if(current.right != null) queue.push(current.right);
    }
    return values; 
} 

console.log(breadthFirstSearch(tree));