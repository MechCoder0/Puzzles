/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findMinHeightTrees = function(n, edges) {
    if (n==1){
       return [0]
   }
   
   var min
   var vals = []
   for (var i = 0; i < n; i ++) {
       h = findMaxHeightForNode(i, null, edges, 0)
       if (min === undefined || h < min) {
           vals = [i]
           min = h
       } else if (h == min){
           vals.push(i)
       }
   }
   
   return vals
};

function findChildren(n, e, edges){
   var children = []
   var newEdges = []
   
   for (var i = 0; i < edges.length; i++){
       if(edges[i][0]==n && edges[i][1] != e){
           children.push([edges[i][1], edges[i][0]])
       } else if (edges[i][1]==n && edges[i][0] != e) {
           children.push([edges[i][0], edges[i][1]])
       } else {
           newEdges.push(edges[i])
       }
   }
   return [children, newEdges]
}

function findMaxHeightForNode(node, nodeToExclude, edges, currentHeight){
   currentHeight ++;
   var ar = findChildren(node, nodeToExclude, edges)
   var children = ar[0]
   if (children.length === 0){
       return currentHeight
   }
   var maxHeight = 0
   for (var i = 0; i< children.length; i++){
       h = findMaxHeightForNode(children[i][0], children[i][1], ar[1], currentHeight)
       if (h > maxHeight){
           maxHeight = h
       }
   }
   return maxHeight
}

// function findChildren(n, e, edges){
//     var children = []
//     // var newEdges = []
   
//     for (var i = 0; i < edges.length; i++){
//         if(edges[i][0]==n && edges[i][1] != e){
//             children.push([edges[i][1], edges[i][0]])
//         } else if (edges[i][1]==n && edges[i][0] != e) {
//             children.push([edges[i][0], edges[i][1]])
//         }
//         // if (!((edges[i][1]==n && edges[i][0] == e) || (edges[i][1]==e && edges[i][0] == n))){
//         //     newEdges.push(edges[i])
//         // }
//     }
   
//     // return [children,newEdges]
//     return children
// }

// function findMaxHeightForNode(node, nodeToExclude, edges, currentHeight){
//     currentHeight ++;
//     var ar = findChildren(node, nodeToExclude, edges)
//     children = ar
//     if (children.length == 0){
//         return currentHeight
//     }
//     var maxHeight = 0
//     for (var i = 0; i< children.length; i++){
//         h = findMaxHeightForNode(children[i][0], children[i][1], edges, currentHeight)
//         if (h > maxHeight){
//             maxHeight = h
//         }
//     }
//     return maxHeight
// }