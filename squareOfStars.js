function squareOfStars(num){
    let symbol = '* ';
    for(let i = 0; i < num; i++){
        console.log(symbol.repeat(num))
    }

}
squareOfStars(5)