function arrayRotation(arr, rotation){
    for(let i = 0; i < rotation; i++){
        let currEl = arr.pop();
        arr.unshift(currEl)
    }
    console.log(arr.join(' '))

}
arrayRotation(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)