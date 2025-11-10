function circleArea(arg1){
    let inputType = typeof(arg1)

    if(inputType === 'number'){
         let area = Math.PI * Math.pow(arg1, 2)
         console.log(area.toFixed(2))


    } else {
        
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }

}
circleArea(5)
circleArea('name')