function pieceOfPie(arr, pie1, pie2){
    let startIndex = arr.indexOf(pie1)
    let end = arr.indexOf(pie2)

    return arr.slice(startIndex, end + 1)
}
console.log(pieceOfPie(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'))