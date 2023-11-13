import CreateRobot from './robot.js'
import flyingRobot from './flyingrobot.js'

/*
*   Class Inheritance - takes existing class and changes/extends it 
*/

const terminator = new CreateRobot('Terminator', 2);
const ali = new flyingRobot('bumblebee', 2);
const noLegsRobot = new flyingRobot('NoLegsRobot', 0)

terminator.sayHi();
ali.sayHi();
noLegsRobot.sayHi();