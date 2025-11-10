function calorieObj(arr){

    let calorieInfo = {};
    for(let i = 0; i < arr.length; i += 2){
        let foodName =arr[i];
        let calValue = Number(arr[i + 1]);

        calorieInfo[foodName] = calValue
    }
    console.log(calorieInfo)

    
}
calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])