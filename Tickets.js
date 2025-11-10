function tickets(data, sortCriteria){
    const store = [];

    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        static sort()  {
        if(sortCriteria === "price"){
            return a[sortCriteria] - b[sortCriteria]
        }
        return a[sortCriteria].localeCompare(b[sortCriteria])
        };
    };
    for(let el of data){
        let [dest, price, status] = el.split('|');
        const ticketsStat = new Ticket(dest, Number(price), status)
        store.push(ticketsStat)

    }

    return store.sort((a, b) => {
        if(sortCriteria === "price"){
            return a[sortCriteria] - b[sortCriteria]
        }
        return a[sortCriteria].localeCompare(b[sortCriteria])
    });

}
const result1 = tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')
console.log(result1)