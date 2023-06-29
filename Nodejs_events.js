import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('Please turn of the motor!');
  setTimeout(()=>{
    console.log("Please turn off the motor! its a gentle reminder!!")
  },3000);
});

myEmitter.on('motorfault', () => {
  console.log('Please repair of the motor!');
  setTimeout(()=>{
    console.log("Please repair off the motor! its a gentle reminder!!")
  },3000);
});
console.log("The script is running");
myEmitter.emit('waterfull');
console.log("The script is still running");
myEmitter.emit('waterfull');


myEmitter.emit('motorfault');
console.log("The script is running");
myEmitter.emit('motorfault');