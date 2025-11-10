function solve(fruit, weightGr, price){
    let weightKg = weightGr/1000;
    let neededMoney = weightKg * price
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`)

}
solve('orange', 2500, 1.80)