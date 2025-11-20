"use strict";

let temp=28, isRaining=false, wind=10;

if(isRaining) console.log("Stay indoors with hot coffee.");
else if(temp>35) console.log("Go swimming.");
else if(temp<15 && wind>20) console.log("Too cold and windy — stay home.");
else console.log("Perfect day for a walk.");
