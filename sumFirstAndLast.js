function firstLast(arr){
    let firstEl = Number(arr.shift())
    let lastEl = Number(arr.pop())
    let sum = firstEl + lastEl
    return sum

}
console.log(firstLast(['20', '30', '40']))