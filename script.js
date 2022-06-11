// What sort of data does my application need to work?

// Storing all needed characters in variables.

// numbers

var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// special characters

var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// uppercase letters

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");

// lower case letters

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// What sorts of tasks does my code need to complete?

// Generate password

function generatePassword() {

  // prompt user for their password length and store it in a variable

  // validate the password length and make sure its a number between or equal to 8 and 128

  // prompt the user for if they want special characters and store in variable

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
}

function generateBtn() {

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
