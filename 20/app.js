function Person(firstname, lastname){
    firstname = firstname;
    lastname = lastname;

}

Person.prototype.greet = function(){
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('John', 'Doe');
john.greet();


var jane = new Person('Jane', 'Doe');
john.greet();


console.log(john.__proto__);
console.log(jane.__proto__);