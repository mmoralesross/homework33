// Assignment Code
var enter;
var numbers;
var characters;
var uppercases;
var lowercases

characters = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "-", "+"];

number = [1,2, 3, 4, 5, 6, 7, 8, 9,10];

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices; 

var toUpper = function (x) {
  return x.toUpperCase();

};

letters2 = letters.map(toUpper);

var generateBtn = document.querySelector("#generate");

var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var dogName = prompt ("What is your dogs name?") 
  var carYear = prompt( "From what year is your car?")
  console.log (dogName)
  return dogName

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
