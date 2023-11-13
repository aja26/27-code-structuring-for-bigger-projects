 import CreateRobot from './robot.js'
 
 export default class flyingRobot extends CreateRobot{
    constructor(name, legs){
        super(name, legs);
        super.sayHi();
        this.sayHi();
    }

    sayHi(){
        console.log(`Hello there squire,  ${this.name}`)
    }

    takeOff(){
        console.log(`Have a good flight ${this.name}`);
    }

    land(){
        console.log(`welcome Back! ${this.name}`);
    }
}

