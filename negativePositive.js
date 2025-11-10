function negativePositive(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let currEl = arr[i]


        if(currEl < 0){
            newArr.unshift(currEl)
        } else{
            newArr.push(currEl)
        }
    }

    console.log(newArr.join('\n'))

}
negativePositive([3, -2, 0, -1])
