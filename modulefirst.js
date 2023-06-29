//common js
// const simple = require("./modulesecond.mjs");

// Es-6 module -- add "type":"module"; to package

// import { simple,simple3 } from "./modulesecond.mjs";
import * as a2 from "./modulesecond.mjs";

//simple23();
// simple();
// simple3();

console.log(a2);
console.log(a2.simple());
console.log(a2.simple3());
console.log(a2.default());