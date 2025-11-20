"use strict";

let str = "Hello";
let num = 42;
let bool = true;
let arr = [1,2,3];
let obj = {a:1};
let nothing = null;
let notSet;

console.table({
  string:{value:str,type:typeof str},
  number:{value:num,type:typeof num},
  boolean:{value:bool,type:typeof bool},
  array:{value:arr,type:Array.isArray(arr)?"array":typeof arr},
  object:{value:obj,type:typeof obj},
  null:{value:nothing,type:"null"},
  undefined:{value:notSet,type:typeof notSet}
});
