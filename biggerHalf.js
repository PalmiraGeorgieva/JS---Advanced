function biggerHalf(arr){
    let sorted = arr.sort((a, b) => a - b)
    let startIndex = Math.floor(sorted.length / 2)

    return sorted.slice(startIndex)
}
console.log(biggerHalf([4, 7, 2, 5]))
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))