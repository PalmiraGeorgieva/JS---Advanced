function jansNotation(data){
    const result = [];

    for(let line of data){
        if(!isNaN(line)){
            result.push(Number(line))
        } else {
            if(result.length < 2){
                console.log(`Error: not enough operands!`)
                return
            }
            let b = result.pop()
            let a = result.pop()

            switch(line){
                case '+': result.push(a + b); break;
                case '-': result.push(a - b); break;
                case '*': result.push(a * b); break;
                case '/': result.push(a / b); break;
            }
        }
    }
    if(result.length === 1) {
       console.log(result[0])
    } else if(result.length > 1){
        console.log("Error: too many operands!")
    }

}
jansNotation([5,
 3,
 4,
 '*',
 '-']
)