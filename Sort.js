class List {
    constructor(){
        this._elements = []
        this.size = 0;

    }
    
    add(elem){
        let index = 0;
        while(index < this._elements.length && this._elements[index] < elem){
            index++;
        }
        this._elements.splice(index, 0, elem);
        this.size = this._elements.length

    }
    remove(index){
        if(index >= 0 && index < this._elements.length){
            this._elements.splice(index, 1);
            this.size = this._elements.length
        } else {
            throw new Error("Index out of range")
        }

    }
    get(index){
        if(index >= 0 && index < this._elements.length){
            return this._elements[index]
        } else {
            throw new Error("Index out of range")
        }

    }

}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));