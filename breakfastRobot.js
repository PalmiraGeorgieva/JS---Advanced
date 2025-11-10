
function solution(){
    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: { carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: { protein: 5, fat: 1, flavour: 1},
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    return function(input){
        const [command, item, quantity] = input.split(' ');

        switch(command){
            case 'restock':
                stock[item] += Number(quantity);
                return 'Success';
            case 'prepare':
                const needed = recipes[item];
                const time = Number(quantity);

                for(let ingredient in needed){
                    if(stock[ingredient] < needed[ingredient] * time){
                        return `Error: not enough ${ingredient} in stock`
                    }
                }

                for(let ingredient in needed){
                    stock[ingredient] -= needed[ingredient] * time;
                }
                return 'Success';
            case 'report': 
                return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
            default:
                 return `Error: invalid command`;    

        }

    }

}
let manager = solution ();
console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock