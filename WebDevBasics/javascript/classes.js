class Person {
    constructor(name="John Doe", age=25) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person("Mostafa", 20);
console.log(person.name, person.age);