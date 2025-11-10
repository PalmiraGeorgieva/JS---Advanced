function oddPosition(data){
    let oddArr = []

    for(let i = 0; i < data.length; i++){
        let currNum = data[i];

        if(i % 2 !== 0){
            oddArr.push(currNum * 2)
        }
    }
    return oddArr.reverse().join(' ')

}
console.log(oddPosition([10, 15, 20, 25]))