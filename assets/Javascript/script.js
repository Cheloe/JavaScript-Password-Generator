// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {

    //This variable is the returned value from the function generatePassword
    var password = generatePassword();

    //This picks out the text box html element sets it to a variable called passwordText.
    var passwordText = document.querySelector("#password");
  
    //This assigns the value returned from the generatePassword function to the variable 'passwordText' so it can be written to the html element #password.
    passwordText.value = password;
  }


//Password Criteria

var minPasswordLength = 8;
var maxPasswordLength= 128;
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbolArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '.', ',', '?', '!'];


//User Input Catcher


//write the generatePassword function

function generatePassword() {

    
    var superArray = [];

    //This clears any values that might have been added to the superArray in the last run
    var password = "";

    window.alert (
        "Hey there! Follow the prompts to generate a random password."
    );

    var promptValues = {
        length: 0,
        number: false,
        lowercase: false,
        uppercase: false, 
        symbol: false, 
        checkPromptAndAddToSuperArray: function (booleanValue, anyArray){
            if(booleanValue == true){
                superArray = superArray.concat(anyArray);
            }
        },
        addToPasswordArray: function () {
            this.checkPromptAndAddToSuperArray(this.number, numberArray);
            this.checkPromptAndAddToSuperArray(this.lowercase, lowercaseArray);
            this.checkPromptAndAddToSuperArray(this.uppercase, uppercaseArray);
            this.checkPromptAndAddToSuperArray(this.symbol, symbolArray);
            }
    }

    //prompts start here

    //prompts user to choose password length
    var passLengthPrompt = window.prompt (
        "To set your password's length, pick a number between 8 and 128."
    );
        
    //console.log (passLengthPrompt);

   //Check if they chose a valid number 
   if ((passLengthPrompt < minPasswordLength) || (passLengthPrompt > maxPasswordLength)) {
    window.alert (
        "That's not a number between 8 and 128. Unfortunately, you'll have to start over. You got this :)");

        //If password length is invalid, start whole thing over
        return;

   //save to promptValues object
   } else (promptValues.length = passLengthPrompt);

   
   //prompt user for numbers criteria
   var passNumberPrompt = window.prompt (
    "Should your password have numbers? (Y/N)"
   );

   //save user input to promptValues object (default F)
   if (passNumberPrompt === 'Y') {
        promptValues.number = true;
   }

   //prompt user for lowercase criteria 
   var passLowercasePrompt = window.prompt (
    "Should your password have lowercase letters? (Y/N)"
   );

   //save user input to promptValues object (default F)
   if (passLowercasePrompt === 'Y') {
    promptValues.lowercase = true;
}

   //prompt user for uppercase criteria

   var passUppercasePrompt = window.prompt (
    "Should your password have UPPERCASE letters? (Y/N)"
   ) 

    //save user input to promptValues object (default F)
   if (passUppercasePrompt === 'Y') {
    promptValues.uppercase = true;
    }


   //prompt user for symbols
   var passSymbolsPrompt = window.prompt (
    "Should your password have symbols? (Y/N)"
   )

   if (passSymbolsPrompt === 'Y') {
    promptValues.symbol = true;
    }

    promptValues.addToPasswordArray ();

    //If user doesn't select any criteria, this error pops up.
    if ((!promptValues.number) && (!promptValues.lowercase) && (!promptValues.uppercase) && (!promptValues.symbol) ){
        window.alert (
            "Whoops! Your password must contain at least one type of character. Please try again. You got this :)");
            return;
    }

   //prompts end here

   //This is just a random number generator
   function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
   }

   //This uses random numbers to pick out characters from the superarray and add them to the password

    function writePassword() {
        for (let i = 0; i < promptValues.length; i++) {
            var randomSuperArrayPosition = getRandomInt(0, superArray.length - 1);
            password += superArray[randomSuperArrayPosition];
        }
    }    

    writePassword();

    return password; 
}


//I'm leaving these here to show that I worked at catching for the cases where the random number generator didn't guarantee that each kind of input would be selected from the superarray. It doesn't work, but I'm leaving it because I did the work.

//     checkCriteriaNumber ();
//     checkCriteriaLowercase ();
//     checkCriteriaUppercase ();
//     checkCriteriaSymbol ();
    
    //check for number
//     function checkCriteriaNumber () {
//     var result = ""; //"false";
//     if (promptValues.number === true) {
//     for (var i = 0; i < password.length; i++) {
//         result = password.charAt(i); //character from pw string
//     console.log (result);
//         if (numberArray.includes(result) === true) {
//             console.log ("number I found a character");
//             break; //var NumberCheck = True;
//         } else if (i < password.length-1) {
//             console.log ("number I did not find a character");
//             continue;
//         } else {
//             console.log ("Number missing new password");
//             password = "";
//             writePassword ();
//             checkCriteriaNumber ();
//         }
// }}}

//     //check for lowercase if lowercase was selected
//     function checkCriteriaLowercase() {
//         var result = "";
//         if (promptValues.lowercase === true) {
//         for (var i = 0; i < password.length; i++) {
//             result = password.charAt(i); //character from pw string
//         console.log (result);
//             if (lowercaseArray.includes(result) === true) {
//                 console.log ("check lower I found a character");
//                 break;
//             } else if (i < password.length-1) {
//                 console.log ("check lower I did not find a character");
//                 continue;
//             } else {
//                 console.log ("I am missing lowercase, generate new password");
//                 password = "";
//                 writePassword ();
//                 checkCriteriaLowercase ();
//             }
// }}}

//     //check for uppercase
//     function checkCriteriaUppercase () {
//         var result = "";
//         if (promptValues.uppercase === true) {
//         for (var i = 0; i < password.length; i++) {
//             result = password.charAt(i); //character from pw string
//         console.log (result);
//             if (uppercaseArray.includes(result) === true) {
//                 console.log ("check upper I found a character");
//                 break;
//             } else if (i < password.length-1) {
//                 console.log ("check upper I did not find a character");
//                 continue;
//             } else {
//                 console.log ("Upper missing new password");
//                 password = "";
//                 writePassword ();
//                 checkCriteriaUppercase ();
//             }
// }}}

// //check for symbol
// function checkCriteriaSymbol () {
//     var result = "";
//     if (promptValues.symbol === true) {
//     for (var i = 0; i < password.length; i++) {
//         result = password.charAt(i); //character from pw string
//     console.log (result);
//         if (symbolArray.includes(result) === true) {
//             console.log ("symbol I found a character");
//             break;
//         } else if (i < password.length-1) {
//             console.log ("symbol I did not find a character");
//             continue;
//         } else {
//             console.log ("symbol missing new password");
//             password = "";
//             writePassword ();
//             password = ')(*^&%*(%';
//             checkCriteriaSymbol ();
//         }
// }}}