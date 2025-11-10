function cookingByNumber(arg1, arg2, arg3, arg4, arg5, arg6){
    let startNum = Number(arg1);
    let workArr = [arg2, arg3, arg4, arg5, arg6];

    for(let i = 0; i < workArr.length; i++){
        let commands = workArr[i];

        switch(commands){
            case 'chop':
                startNum /= 2
                console.log(startNum)
                 break;
            case 'dice':
                startNum = Math.sqrt(startNum)
                console.log(startNum)
                 break;
            case 'spice':
                startNum++;
                console.log(startNum);
                 break;
            case 'bake':
                startNum *= 3;
                console.log(startNum)
                 break;
            case 'fillet':
                startNum *= 0.80;
                console.log(startNum)
                 break;

        }
    }

}
cookingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet')