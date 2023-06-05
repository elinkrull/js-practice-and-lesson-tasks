console.log("This is script 1");

var number1 = 4;
var number2 = 5.5;

console.log(number1);
console.log(number2);


//Create two number variables, one with an integer value and one with a decimal value.

var integer = 4;
var decimal = 5.5;

//Declare and initialise a variable with all the working days of the week separated by hyphens -

var allWorkingDays = "Monday" + "-" + "Tuesday" + "-" + "Wednesday" + "-" + "Thursdag" + "-" + "Friday";
console.log(allWorkingDays);

//four variables that demonstrate the following operations:

//addition

var number1 = 2;
var number2 = 3;

var totalAddition = number1 + number2;
console.log(totalAddition);

//subtraction

var number1 = 6;
var number2 = 4;

var totalSubtraction = number1 - number2;
console.log(totalSubtraction);

//multiplication

var number1 = 3;
var number2 = 6;

var totalMultiplication = number1 * number2;
console.log(totalMultiplication);

//division

var number1 = 9;
var number2 = 3;

var totaldivision = number1 / number2;
console.log(totaldivision);

//Declare a boolean variable with an initial value of false.

var theSunIsYellow = true;

//Console log the number of characters in this string: "The frogs are angry."

var frogsTemper = "The frogs are angry.";
console.log(frogsTemper.length);

//Convet the following variable names to camelCase:

//Convert the following string values to number values:

    //var number1 = "53";
    //var number2 = "44.6";

    var convertedNumber1 = parseInt(number1);
    var convertedNumber2 = parseFloat(number2);

//Check the type of the following variables and log the results:


var pet = "donkey";
var typeOfPet = typeof pet;
console.log(typeOfPet);

var age = 89;
var typeOfAge = typeof age;
console.log(typeOfAge);

var discountApplied = true;
var typeOfdiscountApplied = typeof discountApplied;
console.log(typeOfApplied);

var timeLeft;
var typeOfTimeLeft = typeof timeLeft;
console.log(typeOfTimeLeft);


//Declare and initialise a variable with the value "Updating heading".
//Select the h1 element on the page and set it's inner HTML value to be the variable created above.

var headingText = "Updating heading";
var heading = document.querySelector("h1");
heading.innerHTML = headingText;

//Select the body element on the page and change its background colour to lightskyblue.

var body = document.querySelector("body");
body.style.backgroundColor = "lightskyblue";
console.log(body);