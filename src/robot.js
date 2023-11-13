 export default class CreateRobot{
    sayHi() {
       console.log(` lol Hello my name is ${this.name} and I have ${this.legs} legs`);
    }

    // Constructors run automatically without calling anything on the class
    constructor(name, legs){
        this.name = name
        this.legs = legs
        // console.log(`I am ${name}`)
    }
}