let graph = require("./graph").graph;

function dFSRecursive(start, adjacencyList){
    let visited = {};
    let results = [];

    (function helperRecursion(vertex){
        if(!vertex){
            return null;
        } else {
            visited[vertex] = true;
            results.push(vertex);
            
            let edges = adjacencyList[vertex];
            for(let i=0; i<edges.length; i++){
                if(!visited[edges[i]]){
                    helperRecursion(edges[i]);
                }
            }
        }
    })(start);

    return results;
}

function breadthFirstSearch(start, adjacencyList){
    let queue = [start];
    let visited = {};
    let current;
    while(queue.length){
        current = queue.shift();
        visited[current] = true;
        let edges = adjacencyList[current]; 
        for(let i=0; i<edges.length; i ++){
            if(!visited[edges[i]]) queue.push(edges[i]);
        }
    }
    return Object.keys(visited);
}

console.log(breadthFirstSearch("Tokyo", graph.list));

