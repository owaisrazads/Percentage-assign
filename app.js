

var names = prompt("Enter your name");
var urduMarks = +prompt("Enter Urdu Marks");
var sindhiMarks = +prompt("Enter your sindhiMarks")
var englishMarks = +prompt("Enter your englishMarks")
var chemMarks = +prompt("Enter your chemMarks")
var totalMarks = 400;
var percentage = 100;
var studentMarks = urduMarks + sindhiMarks + englishMarks + chemMarks;
var percentage = studentMarks / totalMarks * percentage;
console.log(names , urduMarks , sindhiMarks , englishMarks , chemMarks)
console.log(names + " total marks is " + studentMarks + " out of " + totalMarks + " and percentage is " + percentage + " %");




































// var names = Number(prompt("enter your name"));
// console.log(typeof(names));
// console.log(names);