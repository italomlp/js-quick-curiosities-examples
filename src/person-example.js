import { Person } from './models/Person.js';

const john = new Person('John', 'Doe', 1);

console.log(john.firstName);
console.log(john.lastName);
console.log(john.fullName);
console.log(john.abbreviatedFullName);

// console.log(john.#lastNameInitial); // error

console.log(Person.isRealPerson(john));
