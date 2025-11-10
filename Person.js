class Person {
    firstName;
    lastName;
    age;
    email;
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}


let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString())
