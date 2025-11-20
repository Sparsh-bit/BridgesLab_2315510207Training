"use strict";

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let secure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;

console.log(secure ? "Secure" : "Unsafe");

// Change values
isOwnerInside=false;
console.log((isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside)?"Secure":"Unsafe");
