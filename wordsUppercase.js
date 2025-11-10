function wordsUppercase(str){
    let splitedStr = str.split(/[^A-Za-z0-9]+/gm)
    let line = ''
    for(let i = 0; i < splitedStr.length; i++){
        let word = splitedStr[i];

        if(splitedStr[i + 1]){
            line += word + ', ';
        } else {
            line += word
        }
    }
    console.log(line.toUpperCase())


}
wordsUppercase('Hi, how are you?')