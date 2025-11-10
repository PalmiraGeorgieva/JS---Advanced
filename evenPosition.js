function evenPosition(arr){
    let evenArr = []

    for(let i = 0; i < arr.length; i++){
        let index = arr[i]

        if(i % 2 === 0){
            evenArr.push(index)
        }
    }
    console.log(evenArr.join(' '))

}
evenPosition(['20', '30', '40', '50', '60'])
evenPosition(['5', '10'])