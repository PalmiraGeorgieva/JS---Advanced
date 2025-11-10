function magicMatrix(matrix){
    for(let i = 0; i < matrix.length - 1; i++){
        let sumRowOne = 0;
        let sumRowTwoo = 0;
        let sumColOne = 0;
        let sumColTwo = 0;

        matrix[i].forEach(el => sumRowOne += el);
        matrix[i + 1].forEach(el => sumRowTwoo += el)
        matrix.forEach(row => sumColOne += row[i])
        matrix.forEach(row => sumColTwo += row[i + 1])

        if(sumRowOne !== sumRowTwoo || sumColOne !== sumColTwo){
            return false
        }
    }
    return true;
}
console.log(magicMatrix([[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]]))