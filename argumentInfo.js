function argumentInfo(...arg){
    const result = {};

    for(let el of arg){
        let type = typeof el;
        console.log(`${type}: ${el}`);

        if(!result.hasOwnProperty(type)){
            result[type] = 0

        }
        result[type] += 1;

    }
    const resultArr = Object.entries(result)
    resultArr.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    for(let [type, count] of resultArr){
        console.log(`${type} = ${count}`)
    }
 
}