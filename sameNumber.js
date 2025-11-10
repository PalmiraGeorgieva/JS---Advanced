function sameNumber(num) {
    let numStr = String(num);
    let firstDig = numStr[0]
    let isSame = true;
    let sum = 0

    for (let i = 0; i < numStr.length; i++) {
        if(numStr[i] !== firstDig){
            isSame = false;
        }

        sum += Number(numStr[i])
        
    }
    console.log(isSame)
    console.log(sum)

}
sameNumber(2222222)