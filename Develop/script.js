// Assignment Code
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
