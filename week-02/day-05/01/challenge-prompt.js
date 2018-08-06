// Day 05
// Activity 01 - Scope Review

// We're going to be asking you what the value of `tracked` will be
// at different points in this code. We want to know what the value
// of `tracked` is if we were to put a console log at that point in
// the code

// As you work through this exercise, console log out `tracked` where
// we provided the seperator console logs for the question and run
// the code to check your answer for each question before moving on 
// to the next one



var tracked = "We're";

console.log("==================== Question 01 ====================");
// What is the value of `tracked` here?
// We're
 


loseTracked1();

function loseTracked1() {
  var tracked = "no";
}

console.log("==================== Question 02 ====================");
// What is the value of `tracked` here?
// We're



loseTracked2(tracked);

function loseTracked2(arg) {
  arg = "strangers";
}

console.log("==================== Question 03 ====================");
// What is the value of `tracked` here?
// strangers



loseTracked3();

function loseTracked3(tracked) {
  console.log("==================== Question 04 ====================");
  // What is the value of `tracked` here?
  // strangers

} 



loseTracked4();

function loseTracked4() {
  tracked = "to";
}

console.log("==================== Question 05 ====================");
// What is the value of `tracked` here?
// strangers



loseTracked5("love");

function loseTracked5(arg) {
  tracked = arg;
} 

console.log("==================== Question 06 ====================");
// What is the value of `tracked` here?
// love



loseTracked6("You");

function loseTracked6(arg) {
  arg = "know";

  console.log("==================== Question 07 ====================");
  // What is the value of `tracked` here?
  // love

}



console.log("==================== Question 08 ====================");
// What is the value of `tracked` here?
//  love



tracked = "the";

loseTracked7(tracked);

function loseTracked7(tracked) {
  tracked = "rules";

  console.log("==================== Question 09 ====================");
  // What is the value of `tracked` here?
  // rules

} 



console.log("==================== Question 10 ====================");
// What is the value of `tracked` here?
// rules



loseTracked8("and");

function loseTracked8(arg) {
  var tracked = arg;

  console.log("==================== Question 11 ====================");
  // What is the value of `tracked` here?
  // and


}



console.log("==================== Question 12 ====================");
// What is the value of `tracked` here?
// and



var newTracked = "so";

function loseTracked9() {
  tracked = newTracked;  
}

console.log("==================== Question 13 ====================");
// What is the value of `tracked` here?
// so



loseTracked10("do");

function loseTracked10(newTracked) {
  newTracked = "I";
}

tracked = newTracked;

console.log("==================== Question 14 ====================");
// What is the value of `tracked` here?
// so



tracked = 12;

loseTracked11(tracked);

function loseTracked11(arg) {
  arg = 14;
}

console.log("==================== Question 15 ====================");
// What is the value of `tracked` here?
// 14



tracked = false;

loseTracked12(tracked);

function loseTracked12(arg) {
  arg = true;
}

console.log("==================== Question 16 ====================");
// What is the value of `tracked` here?
// true



tracked = {a: "hello", b: "world"};

loseTracked13(tracked);

function loseTracked13(arg) {
  arg = "goodbye";
}

console.log("==================== Question 17 ====================");
// What is the value of `tracked` here?
// goodbye



tracked = ["variable", "scoping", "is"]

loseTracked14(tracked);

function loseTracked14(arg) {
  arg = "fun";
} 

console.log("==================== Question 18 ====================");
// What is the value of `tracked` here?
// fun



tracked = ["Testing", "Arrays"];

loseTracked15(tracked);

function loseTracked15(arg) {
  arg[0] = "WHAT!?";
  arg.pop();
  arg.push("Arrays!")

  console.log("==================== Question 19 ====================");
  // What is the value of `tracked` here?
  // ["Arrays"]

}



console.log("==================== Question 20 ====================");
// What is the value of `tracked` here?
// [Arrays]



tracked = {how: "about", objects: "?"}

loseTracked16(tracked);

function loseTracked16(arg) {
  var key = "how";
  arg.key = "Dot Notation!";
  arg[key] = "Bracket Notation!";

  console.log("==================== Question 21 ====================");
  // What is the value of `tracked` here?
  // {how: "Dot notation, objects: "?"}

}




console.log("==================== Question 22 ====================");
// What is the value of `tracked` here?
// {how: "Dot notation, objects: "?"}



tracked = "Never Gonna Give You Up";

loseTracked17(tracked);

function loseTracked17(arg) {
  arg[0] = "R";
  arg[1] = "ick";

  console.log("==================== Question 23 ====================");
  // What is the value of `tracked` here?
  // ["R","ick"]

}



console.log("==================== Question 24 ====================");
// What is the value of `tracked` here?
// ["R","ick"]
