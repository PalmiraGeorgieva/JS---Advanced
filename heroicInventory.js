function heroicInventory(data){
    let result = []

    for(let line of data){
        if(!line.trim()) continue;
        let [name, heroLevel,item] = line.split(' / ');
        let level = Number(heroLevel);
        let items = item ? item.split(', ') : [];

        result.push({ name, level, items})

    }
    console.log(JSON.stringify(result))

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])