let swap = require("./Swap").swap;

class Graph {
    constructor(){
        this.list = {};
    }

    addVertex(name){
        this.list[name] = [];
    }

    addEdge(v1, v2){
        this.list[v1].push(v2);
        this.list[v2].push(v1);
    }

    removeEdge(v1, v2){
        this.list[v1] = this.removeItemFromArray(this.list[v1], v2);
        this.list[v2] = this.removeItemFromArray(this.list[v2], v1);
    }
    
    removeVertex(vertex){
        let edges = this.list[vertex];
        for(let i=0; i<edges.length; i++){
            this.removeEdge(vertex, edges[i]);
        }
        delete this.list[vertex];
    }

    removeItemFromArray(array, item){
        let index = array.indexOf(item);
        swap(array, index, array.length - 1);
        array.pop();
        return array;
    }
}

let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("New York");
graph.addVertex("Pittsburgh");
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("New York", "Dallas");
graph.addEdge("New York", "Pittsburgh");

module.exports.graph = graph;