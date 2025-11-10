function townPopulation(arr){
    let townInfo = {}

    for(let el of arr){
        let [townName, population]= el.split(' <-> ');

        if(townInfo.hasOwnProperty(townName)){
            townInfo[townName] += Number(population)
        } else {
            townInfo[townName] = Number(population)
        }


    }

    let entries = Object.entries(townInfo);
    for(let [town, population] of entries){
        console.log(`${town} : ${population}`)
    }


}
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])