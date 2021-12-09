const SHOULD_USER_PERSON_CLASS = true;

if (SHOULD_USER_PERSON_CLASS) {
    const { Person } = await import('./models/Person.js');
    const jane = new Person('Jane', 'Doe');
    console.log(jane.fullName);
} else {
    const jane = {
        firstName: 'Jane',
        lastName: 'Doe',
        fullName: function () {
            return `${this.firstName} ${this.lastName}`;
        }
    };
    console.log(jane.fullName());
}
