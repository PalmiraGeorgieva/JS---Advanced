function printEveryNth(arr, step){
    let nArr = []
   
    for(let i = 0; i < arr.length; i += step){
        nArr.push(arr[i])
        
    }
    return nArr
   
   
}
console.log(printEveryNth(['5', 
'20', 
'31', 
'4', 
'20'], 
2))