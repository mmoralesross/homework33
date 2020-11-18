// Assignment Code
var enter;
var numbers;
var characters;
var uppercases;
var lowercases

character = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "+", "-"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices; 

var toUpper = function (x) {
  return x.toUpperCase();
};

letters2 = letters.map(toUpper);

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    password = generatePassword();
    document.getElementById("password").placeholder = password;
  });

function generatePassword() {

enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

if (!enter) {
  alert("This needs a value");

} else if (enter < 8 || enter > 128) {
  enter = parseInt(prompt("You must choose between 8 and 128"));

} else { 

  numbers = confirm("Will this contain numbers?");
  characters = confirm("Will this contain special characters?");
  uppercases = confirm("Will this contain uppercase letters?");
  lowercases = confirm("Will this contain lowercase letters?");


};

if (!character && !number && !uppercases && !lowercases) {
  choices = alert("You must choose a criteria!");

}

else if (characters && numbers && uppercases && lowercases) {
  choices = character.concat(number, letters, letters2);
}

else if (characters && numbers && uppercases) {
  choices = character.concat(number, letters2);
}
else if (characters && numbers && lowercases) {
  choices = character.concat(number,letters);
}
else if (characters && lowercases && uppercases) {
  choices = character.concat(letters, letters2);
}
  else if (numbers && lowercases && uppercases) {
    choices = characters.concat(letters, letters2);
}

//

else if (characters && numbers) {
  choices = character.concat(number);
}
else if (characters && lowercases) {
  choices = character.concat(letters);
}
else if (characters && uppercases) {
  choices = character.concat(letters2);
}
 else if (lowercases && numbers) {
   choices = letters.concat(number);
 }
 else if (lowercases && uppercases) {
   choices = letters.concat(letters2);
 }
 else if (numbers && uppercase) {
   choices = number.concat(letters2);
 }       
  
 //

 else if (characters) {
   choices = character;
 }
else if (numbers) {
  choices = number;
}
else if (lowercases) {
  choices = letters;
}

else if (uppercases) {
  choices = space.concat(letters2);

};

var password = [];

for (var i = 0; i < enter; i++) {
  var choices2 = choices[Math.floor(Math.random() * choices.length)];
  password.push(choices2);
}

var password = password.join("");
UserInput(password);
return password;
 }

function UserInput(password) {
  document.getElementById("password").textContent = password;

};
