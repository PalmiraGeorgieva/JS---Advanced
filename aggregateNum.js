function solve(arr) {
    console.log(aggregation(arr, (a, b) => a + b, 0));
    console.log(aggregation(arr, (a, b) => b + 1/a, 0));
    console.log(aggregation(arr, (a, b) => b + a, ''));

    function aggregation(arr, callback, initialVal){
        let sum = initialVal
        arr.forEach(a =>{ 
            sum = callback(a, sum)
        });
        return sum
        

    }
}
solve([1, 2, 3])