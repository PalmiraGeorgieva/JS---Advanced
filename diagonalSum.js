function diagonalSum(matrix){
    let sum = 0;
    let secondarySum = 0;

    for(let i = 0; i  < matrix.length; i++){
        sum += matrix[i][i]


        
    }
    for(let row = 0; row < matrix.length; row++){
            let col = matrix.length - row - 1;
            secondarySum += matrix[row][col]


    }
    console.log(sum, secondarySum)


}
diagonalSum([[20, 40],
 [10, 60]])
 diagonalSum([[3, 5, 17],
 [-1, 7, 14],
 [1, -8, 89]])