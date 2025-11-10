function autoEngine(arr){
    let autoMap = new Map();

    for(let line of arr){
        let [carName, model, produceStr] = line.split(' | ');

        let produce = Number(produceStr)

        if(!autoMap.has(carName)){
            autoMap.set(carName, new Map());
        };
        let models = autoMap.get(carName);

        if(!models.has(model)){
            models.set(model, 0);
        };

        models.set(model, models.get(model) + produce)
    }
    for(let [brand, models] of autoMap){
        console.log(brand);
        for(let [model, count] of models){
            console.log(`###${model} -> ${count}`)
        }

    }

}
autoEngine(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])