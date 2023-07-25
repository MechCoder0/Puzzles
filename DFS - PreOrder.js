let tree = require("./trees").tree;

function DFS(tree){
    let visited = [];
    function traversal(node){
        let visitedNodes = [];
        visited.push(node);
        if(node.left) traversal(node.left);
        if(node.right) traversal(node.right);
    }
    traversal(tree.root); 
    return visited;
}


console.log([3].concat([5,3]));
console.log(DFS(tree));