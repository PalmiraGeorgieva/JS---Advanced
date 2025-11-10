class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        this.innerLength -= value;
        if (this.innerLength < 0) this.innerLength = 0;
    }

    toString() {
    if (this.innerLength === 0) return '...';
    return this.innerString.length > this.innerLength
        ? this.innerString.slice(0, this.innerLength) + '...'
        : this.innerString;
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4); 
console.log(test.toString()); // Test