function biggestElem(matrix){
    let maxNum = Number.NEGATIVE_INFINITY;

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(matrix[row][col] > maxNum){
                maxNum = matrix[row][col]
            }

        }
    }
    return maxNum
}
console.log(biggestElem([[20, 50, 10],
 [8, 33, 145]]))


 /*function biggestElement(matrix) {
  return Math.max(...matrix.flat());
} */