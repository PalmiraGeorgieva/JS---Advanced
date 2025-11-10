function dayInMonth(month, year){
    let date = new Date(year, month, 0).getDate();
    return date;
   

}
console.log(dayInMonth(2, 2021))