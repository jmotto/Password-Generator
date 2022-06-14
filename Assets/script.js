// Storing all needed characters in variables.

var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~"];

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


// Variable Declaration
var passwordLength = "";
var useSpecialCharacter;
var useNumber;
var useUpperCase;
var useLowerCase;


// Generate password

function generatePassword() {
  // 'prompt' user for their password length and store it in a variable
  var passwordLength = (prompt("How many characters will your password contain?"));

  // validate the password length and make sure its a number between or equal to 8 and 128
      if(passwordLength < 8 || passwordLength > 128){
        alert("Password must be between 8 and 128 characters");
        var passwordLength = (prompt("How many characters will your password contain?"));
      }

  // confirm if the user wants special characters, numbers, upper/lowercase and store in variable
  var useSpecialCharacter = (confirm("Would you like your password to have special characters? Click 'OK' for YES. Click 'Cancel' for NO"));  
  var useNumber = (confirm("Would you like your password to have numbers? Click 'OK' for YES. Click 'Cancel' for NO"));  
  var useLowerCase = (confirm("Would you like your password to have lowercase letters? Click 'OK' for YES. Click 'Cancel' for NO"));  
  var useUpperCase = (confirm("Would you like your password to have upper case letters? Click 'OK' for YES. Click 'Cancel' for NO"));  

  // validate that at least one character choice is true
  if( !useSpecialCharacter && !useNumber && !useLowerCase && !useUpperCase ) {
    // Alert the user they had bad data
    alert ("Please choose at least one character type.");
    return ""}

  // DECLARE a new empty array to store the characters we want to use.
var passwordCharacters = []

  if(useSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialCharacter);
  }

  if(useNumber) {
    passwordCharacters = passwordCharacters.concat(number);
  }

  if(useLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCase);
  }
  if(useUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCase);
  }

  // DECLARE a new empty string to store the password character and randomly select characters
  var randomPassword = ""

  for( var i =0; i < passwordLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
  }
  
  return randomPassword; 
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
