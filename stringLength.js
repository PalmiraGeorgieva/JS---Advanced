function stringLength(str1, str2, str3){
    let sumLengths = str1.length + str2.length + str3.length;
    let avrLength = Math.floor(sumLengths / 3)
    console.log(sumLengths);
    console.log(avrLength)

}
stringLength('chocolate', 'ice cream', 'cake')