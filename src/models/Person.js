export class Person {
    #firstName;
    #lastName;
    #id;

    constructor(firstName, lastName, id) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#id = id;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(firstName) {
        this.#firstName = firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(lastName) {
        this.#lastName = lastName;
    }

    get #lastNameInitial() {
        return this.#lastName.charAt(0);
    }

    get fullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    get abbreviatedFullName() {
        return `${this.#firstName} ${this.#lastNameInitial}`;
    }

    static isRealPerson(obj) {
        return #id in obj && !!obj.#id;
    }

}
