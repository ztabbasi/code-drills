//Variables
//the nouns of programming

//this is a comment - any code commented out is not run -
//meaning that any code or text commented out is ignored.

/*
this is a multiline comment
You can coment out many lines at once.
For the most part you will see single line comments
but it is good to see this.
As in single line comments, any code contained within multi-line comments are not run -
meaning that any code commented out is ignored.
*/

//Topic: strings

//create a variable named subject with no value:
//example: var hobby;

var subject;

//assign a value of "Programmers" to the variable subject
//example: hobby = "problem solving"

subject = "Programmers"

// Create a variable, firstName, and assign it a value of an empty string.
//example: var emptyString = "";

var firstName = ""

//assign a value of "Ada" to the variable firstName

firstName = "Ada"

// Create a variable, lastName, and assign it a value of a string, "Lovelace".

var lastName = "Lovelace"

// Create a variable, fullName, and assign it a value of the combination of firstName and lastName with a space.

var fullName = firstName + " " + lastName;

// Create a variable, profession, and assign it a value of a string, "Computer Programmer".

var profession = "Computer Programmer";

// Create a variable, knownFor, and assign it a value of a string, "first computer programmer".

var knownFor = "the first computer programmer";

// Create a variable, firstAlgorithm, and assign it a value of a string, "Analytical Engine".
var firstAlgorithm = "Analytical Engine";

// Create a variable, cityLocation, and assign it a value of a string, "London";
var cityLocation = "London";

// Create a variable, countryLocation, and assign it a value of a string, "England";
var countryLocation = "England";

// Create a variable, nationality, and assign it a value of a string, "British";
var nationality = "British";

//Topic: integers

// Create a variable, birthYear, and assign it a value of a integer, 1815.

var birthYear = 1815;

// Create a variable, deathYear, and assign it a value of a integer, 1852.

var deathYear = 1852;

// Create a variable, ageAtPassing, and assign it a value of deathYear minus birthYear.

var ageAtPassing = 1852 - 1815;

// Create a variable, yearOfPublish, and assign it a value of 1842.

var yearOfPublish = 1842;

// Create a variable, ageAtPassing, and assign it a value of deathYear minus birthYear.

var ageAtYearOfPublish = 1842 - 1815;


//Topic: console log

////console log: "First Name: Ada"
console.log("First Name: " + firstName);

////console log: "Last Name: Lovelace"
console.log("Last Name: " + lasName);

////console log: "Profession: Computer Programmer"

console.log("Profession: " + Profession);

////console log: "BirthYear: 1815"

console.log("BirthYear: " + birthYear);

//Topic: Concat Values

// Create a variable, statementOne, and assign it a value of a string:
// "Programmers: Ada Lovelace is a British Computer Programmer born in 1815."

var statementOne = subject + " " + fullName + "is a " + nationality + " " + profession + "born in " + birthYear + ".";



// Create a variable, statementTwo, and assign it a value of a string:
//"She is commonly referred to as the first computer programmer"
var statementTwo = "she is commonly referred to as " + knownFor;



// Create a variable, statementThree, and assign it a value of a string:
//"In 1842 she published the first Algorithm, the Analytical Engine, at the age of 27."
var statementThree = "In " + yearOfPublish + "she publised the first Algorithm, the " + firstAlgorithm + ", at the age of " + ageAtYearOfPublish;


// Create a variable, statementFour, and assign it a value of a string:
//She was a British Citizen who lived in London, England until her passing in 1852 at the age of 37.
var statementFour = "She was a " + nationality + "Citizen who lived in " + cityLocation + ", " + countryLocation + "until her passing at the age of " + ageAtPassing;


//Topic: console.log()


//console log Statement One
console.log(statementOne);

//console log Statement Two

console.log(statementTwo);

//console log Statement Three
console.log(statementThree);

//console log Statement Four
console.log(statementFour);
