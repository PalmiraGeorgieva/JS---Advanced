function factory(libraries, orders){
    let result = [];

    for(let order of orders){
        let products = { ...order.template } 
        

        for(let part of order.parts){
            products[part] = libraries[part]
        }

        result.push(products)
    }
    return result

}

const libraries = {
    print: function (){
        console.log(`${this.name} is printing a page`);

    },
    scan: function(){
        console.log(`${this.name} is scanning a document`);
    },
    play: function(artist, track){
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    }
}
const orders = [{
    template: { name: 'ACME Printer' },
    parts: ['print']
  
},
{
    template: { name: 'Initech Scanner' },
    parts: ['scan']

},
{
    template: { name: 'ComTron Copier'},
    parts: ['scan', 'print']

},
{
    template: { name: 'BoomBox Stereo'},
    parts: ['play']
}];
let products = factory(libraries, orders)
console.log(products)

products[0].print();
products[1].scan();
products[2].print();
products[2].scan();
products[3].play("Eminem", "Lose Yourself");