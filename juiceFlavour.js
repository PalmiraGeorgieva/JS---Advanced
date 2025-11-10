
function juicesFlavour(arr){
    class  JuiceProcessor {
    constructor(){
        this.juices = {};
        this.bottles = {};

    }

    addJuice(flavour, qty){
        if(!this.juices[flavour]){
            this.juices[flavour] = 0;
        }
        this.juices[flavour] += qty;
        if(this.juices[flavour] >= 1000){
            const newBottle = Math.floor(this.juices[flavour] / 1000);

            if(!this.bottles[flavour]){
                this.bottles[flavour] = 0;
            }
            this.bottles[flavour] += newBottle;
            this.juices[flavour] = this.juices[flavour] % 1000;
        } 
    }
    printBottles(){
        for(let flavour in this.bottles){
            console.log(`${flavour} => ${this.bottles[flavour]}`)
        }
    }

  }
    const processor = new JuiceProcessor();

    for(let el of arr){
        const [flavour, qty] = el.split(' => ');
        processor.addJuice(flavour, Number(qty))
    }
    processor.printBottles()

}
juicesFlavour(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])
