// Assignment code

// Refers to the ID generate on line 28 of the HTML file.
var generateBtn = document.querySelector("#generate");

// Give the employee various options for the password criteria.
var passwordCriteria = {
  length: 0,
  lowercase: 0,
  uppercase: 0,
  numeric: 0,
  special: 0,
}

// When the employee clicks the Generate Password button, this function is called by the event listener "generateBtn.addEventListener".
function writePassword() {

  // Prompts the employee to choose various options for the password criteria.
  criteriaPrompts ();

  // Here is the function that generates the password after the employee selects the desired criteria.
  var password = generatePassword();

  // Once the employee chooses various options for the password criteria, then the randomly generated password will appear in the text area box.
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function that generates the random password given the employee's chosen criteria.
var generatePassword = function() {
  var newPassword = "";
  for (i = 0; i < passwordCriteria.length; i++){
    var charType = randomNumber(1, 4);

    // These conditional statemetns generate random character types based on the various criteria categories that the employee can choose from.
    if (charType === 1 && passwordCriteria.lowercase === 1) {
      newPassword += genLowercase();
      console.log(newPassword);
    }
    else if (charType === 2 && passwordCriteria.uppercase === 1) {
      newPassword += genUppercase();
      console.log(newPassword);
    }
    else if (charType === 3 && passwordCriteria.numeric === 1) {
      newPassword += genNumeric();
      console.log(newPassword);
    }
    else if (charType === 4 && passwordCriteria.special === 1) {
      newPassword += genSpecial();
      console.log(newPassword);
    }
    //***if all else fails, decrement i to throw out this iteration through the loop and try again.
    else i--;
    
  }
  return newPassword;
}

//***This variable generates a password of a random numbers between and including min and max
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
}

//this function presents the user with a series of prompts to determine what criteria the password 
//should include. The criteria are stored in a global object to make it easier for all parts of the 
//program to access the criteria.
var criteriaPrompts = function() {
  
  while (passwordCriteria.length < 8 || passwordCriteria.length > 128) {
    passwordCriteria.length = window.prompt("Please enter your desired length of password ranging from 8 to 128 characters.")
    if (passwordCriteria.length < 8 || passwordCriteria.length > 128) {
      window.alert ("Please try again! Selected length must range from 8 to 128 characters.");
    }
  }

  while (passwordCriteria.lowercase === 0 && passwordCriteria.uppercase === 0 && passwordCriteria.numeric === 0 && passwordCriteria.special === 0) {
    var lowercaseConfirm = window.confirm("Include lowercase letters in your randomly generated password?");
    if (lowercaseConfirm) {
      passwordCriteria.lowercase = 1;
    }
    var uppercaseConfirm = window.confirm("Include uppercase letters in your randomly generated password?");
    if (uppercaseConfirm) {
      passwordCriteria.uppercase = 1;
    }
    var numericConfirm = window.confirm("Include numbers in your randomly generated password?");
    if (numericConfirm) {
      passwordCriteria.numeric = 1;
    }
    var specialConfirm = window.confirm("Include special characters in your randomly generated password?");
    if (specialConfirm) {
      passwordCriteria.special = 1;
    }
    if (passwordCriteria.lowercase === 0 && passwordCriteria.uppercase === 0 && passwordCriteria.numeric === 0 && passwordCriteria.special === 0){
      window.alert ("Please try again! You must choose at least one type of character to include in your randomly generated password.");
    }
    console.log(passwordCriteria);
  }
}

// These variables refer to the ASCII table at https://www.ascii-code.com/ to generate a single character from the appropriate criteria categories.

// Character 97 in the ASCII table is Lowercase a and counting consecutively 25 more characters covers the range from Lowercase a to Lowercase z.
var genLowercase = function() {
  return String.fromCharCode(97 + randomNumber(0, 25));
}

// Character 65 in the ASCII table is Uppercase A and counting consecutively 25 more characters covers the range from Uppercase A to Uppercase Z.
var genUppercase = function() {
  return String.fromCharCode(65 + randomNumber(0, 25));
}

// Character 48 in the ASCII table is 0 and counting consecutively nine more characters covers the range from 0 to 9.
var genNumeric = function() {
  return String.fromCharCode(48 + randomNumber(0, 9));
}

// Character 58 in the ASCII table is a colon and counting consecutively six more characters includes the special characters colon, semicolon, less than sign, equal sign, greater than sign, question mark, and @ sign. I wasn't sure how to include separate consecutive characters in the ASCII table, e.g., 33-47.
var genSpecial = function() {
  return String.fromCharCode(58 + randomNumber(0, 6));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);