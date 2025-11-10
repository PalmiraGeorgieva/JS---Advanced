function extractIncreasingSubs(arr){
    return arr.reduce((num, currentNum) => {
        if(num.length === 0 || currentNum >= num[num.length - 1]){
            num.push(currentNum)
        }
        return num
    }, [])

}
console.log(extractIncreasingSubs([1, 
3, 
8, 
4, 
10, 
12, 
3, 
2, 
24]))