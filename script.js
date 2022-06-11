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


// What sort of data does my application need to work?

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

// What sorts of tasks does my code need to complete?

// Generate password

function generatePassword() {
  // 'prompt' user for their password length and store it in a variable
  var passwordLength = (prompt("How many characters will your password contain?"));

  // validate the password length and make sure its a number between or equal to 8 and 128
      if(passwordLength < 8 || passwordLength > 128){
        alert("Password must be between 8 and 128 characters");
        return "";
      }
      // If passwordLength greater than or equal to 8 and 'passwordLength' less than or equal to 128
      // if ( passwordLength >=8 && <=128 ) {
      //   return "";
      // }
      // If 'passwordLength' less than 8 or it greater than 128;
      // if () {
        // end the function early
      //  return "";
      // }

  // prompt the user for if they want special characters and store in variable
  var useSpecialCharacter = (prompt("Would you like your password to have special characters? Click 'OK' for YES. Click 'Cancel' for NO"));  
  // prompt the user for if they want numbers and store in variable
  var useNumber = (prompt("Would you like your password to have numbers? Click 'OK' for YES. Click 'Cancel' for NO"));  
  // prompt the user for if they want lower case and store in variable
  var useLowerCase = (prompt("Would you like your password to have lowercase letters? Click 'OK' for YES. Click 'Cancel' for NO"));  
  // prompt the user for if they want upper case and store in variable
  var useUpperCase = (prompt("Would you like your password to have upper case letters? Click 'OK' for YES. Click 'Cancel' for NO"));  

  // validate that at least one character choice is true
  if( !useSpecialCharacter && !useNumber && !useLowerCase && !useUpperCase ) {
    // Alert the user they had bad data
    alert ("Please choose at least one character type.");
    return ""}

  // DECLARE a new empty array to store the characters we want to use.

  var myArray = []

  var things = [1,2,3]
  var things2 = [1,2,3,4,5];

  myArray = myArray.concat(things);
    // If 'specialCharacter' is true 

      // Combine 'specialcharacters' with 'characters' we want to use
  
    myArray = myArray.concat(things);
    
    //If 'number' is true
    myArray = myArray.concat(things);

    // if 'lowercase' is true
    myArray = myArray.concat(things);

  // DECLARE a new empty string to store the password character

  // for loop --- for( var i = 0; i , passwordLength; i++ ) 

    // Randomly select characters

    // Adding that character to a building password string;

  // Return completed string;



  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat


}

function generateBtn() {

}
