class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    // getters
    get area(){
        return this.height * this.width;
    }

    // setters
    set area(_area){
        this.width = Math.sqrt(_area);
        this.height = Math.sqrt(_area);
    }

    // method
    printDescription(){
        console.log(`I am  a ${this.width} x ${this.height} square`)
    }

    // static method
    static isValidSquare(_square){
        return _square.height === _square.width;
    }

    static isSameSize(_square1, _square2){
        if(this.isValidSquare(_square1) && this.isValidSquare(_square2)){
            return _square1.width === _square2.width;
        }else{
            return false;
        }
    }
}

let square1 = new Square(4);
let square2 = new Square(6);

square1.printDescription()


// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// CONCEPT OF INHERITANCE AND EXTEND

class Person {
    constructor(name, age){
        this.age = age;
        this.name = name;
    }

    describe(){
        console.log(`My name is ${this.name} I am ${this.age} years old`);
    }
}

// Programmer is a child of person
class Programmer extends Person {
    constructor(name, age, yearsOfExperience){
        // defining parent properties
        super(name, age);

        // custom properties
        this.yearsOfExperience = yearsOfExperience;
    }

    code() {
        console.log(`${this.name} is coding`);
    }
}

const person1 = new Person("Jeff", 25);
person1.describe();

const programmer1 = new Programmer("Dom", 52, 12);
programmer1.describe();
programmer1.code()



// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// CONCEPT OF POLYMORPHISM

class Animal{
    constructor(name){
        this.name = name;
    }

    makeSound(){
        console.log("Generic Animal sound");
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }

    makeSound(){
        console.log("Woof! Woof!")
    }
}

const a1 = new Animal("nimal")
a1.makeSound()

const d1 = new Dog("Dog 1");
d1.makeSound();