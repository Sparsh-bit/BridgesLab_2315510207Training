"use strict";

let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(" ").length;
let containsNeg = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

console.log("Words:",words);
console.log(containsNeg ? "Needs Improvement" : "Positive Feedback");
