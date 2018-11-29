import {Person, differentThis} from './es6-tutorial.js';
import StamStudent from './es6-tutorial';

// ES6

// class

export class Person {
    constructor(age) {
        this.age = age;
    }

    sayHello() {
        console.log('hello world ' + this.age);
    }

    sayHello2 = () => {
        console.log('hello world ' + this.age);
    }
}



const person = new Person(33);
person.sayHello();

export const differentThis = {hello: person.sayHello}
differentThis.hello()

// variable declaration

// var/let/const <variable-name> = <value>

// scope - where variable lives
// assignment - number of assignments

// var functional scope
// let/const - scope is block

// assignment
// var/let multiple assignments

var stam = 10;
stam = 'dsfgsdf';

let stam2 = 10;
stam2 = 'dsfgsdf';

const stam3 = 10;
// stam3 = 'dsfgsdf'; // Error

export default class Student extends Person{
    constructor(age, grade) {
        super(age);
        this.grade = grade;
    }
}

