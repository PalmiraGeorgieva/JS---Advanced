function solution(){
    class Employee{
        name;
        age;
        salary;
        task;
        constructor(name, age){
            this.name = name;
            this.age = age;
            this.task = [];
        }

        work(){
            const currentTask = this.task.shift();
            console.log(currentTask);
            this.task.push(currentTask);
        }

        collectSalary(){
            const totalSalary = this.salary + (this.dividend || 0);
            console.log(`${this.name} received ${totalSalary} this month.`)
        }
    }

    class Junior extends Employee {
        constructor(name, age){
            super(name, age);
            this.task = [`${this.name} is working on a simple task.`]
        }

    }

    class Senior extends Employee{
        constructor(name, age){
            super(name,age);
            this.task = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`
            ]

        }
    }

    class Manager extends Employee {
        constructor(name, age){
            super(name, age)
            this.task = [ 
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`
            ];
            this.dividend = 0;

        }
    }
    return {
        Employee,
        Junior,
        Senior,
        Manager
    }


}
const classes = solution ();
const junior = new classes.Junior('Ivan',25);
junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();
const sinior = new classes.Senior('Alex', 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary(); 
const manager = new classes.Manager('Tom', 55); 
manager.salary = 15000; manager.collectSalary(); 
manager.dividend = 2500; manager.collectSalary();