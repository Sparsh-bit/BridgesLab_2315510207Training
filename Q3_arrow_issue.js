// Q3 arrow function this issue
"use strict";

const user={
  name:"Sparsh",
  showName: ()=>{ console.log(this.name); }
};

console.log("Arrow output:");
user.showName();

const userFixed={
  name:"Sparsh",
  showName(){ console.log(this.name); }
};

console.log("Fixed output:");
userFixed.showName();
