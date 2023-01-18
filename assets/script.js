// Assignment Code

// References the id of 'generate' in line 28 of the HTML file
var generateBtn = document.querySelector("#generate");

// Password criteria
const passwordCriteria = "abcdefghijlkmnopqrstuvwxyz".split("");

// Write password to the #password input

// Function called by the event listener "generateBtn.addEventListener" upon button click
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
