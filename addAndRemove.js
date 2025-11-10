function addAndRemove(arr){
    let initial = 1;
    let newArr = [];

    for(let command of arr){

        if(command === 'add'){
            newArr.push(initial)
        } else if (command === 'remove'){
            newArr.pop()
        }
        initial++;

    }
    if(newArr.length === 0){
        console.log('Empty')
    } else {
        console.log(newArr.join('\n'))
    }

    

}
addAndRemove(['remove', 
'remove', 
'remove'])