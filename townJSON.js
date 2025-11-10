function townJSON(data){
    const townInfo = [];
    let [headersA, headersB, headersC] = data.shift().split(/\s?\|\s?/gm).filter(el => !!el)

    for(let line of data){
        let [townName, lat, long] = line.split(/\s?\|\s?/gm).filter(el => !!el);
        lat = Number(lat).toFixed(2)
        long = Number(long).toFixed(2)
        const info ={}

        info[headersA] = townName;
        info[headersB] = Number(lat)
        info[headersC] = Number(long)
        townInfo.push(info)

    }
    return JSON.stringify(townInfo)

}
console.log(townJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']))