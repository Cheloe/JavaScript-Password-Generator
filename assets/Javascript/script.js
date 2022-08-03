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
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbolArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '.', ',', '?', '!'];
//var superArray = [];

//User Input Catcher


//write the generatePassword function

function generatePassword() {

    //This clears any values that might have been added to the superArray in the last run
    var superArray = [];

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
        
    console.log (passLengthPrompt);

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

    // console.log (promptValues);

    console.log (superArray);

   //prompts end here

   //This is just a random number generator
   function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
   }

   //This uses random numbers to pick out characters from the superarray and add them to the password
   for (let i=0; i< promptValues.length; i++){
    var randomSuperArrayPosition = getRandomInt(0, superArray.length-1);
    password += superArray[randomSuperArrayPosition];
   }

   //This is the end of the whole writePassword function

    //Keep these together:
    return password; 
}
// together I said


//To Do: 

//Make sure the password has at least one of each chosen thing.


//for each criteria selected:

//check if promptValues.criteria === 'true', if yes, make sure password has a value from that array, if it doesn't, empty password, and run promptValues.AddToPasswordArray again.

//was upper selected? if yes look for upper and if no upper, run again
    //if no go to next criteria

    //promptValues.critera === 'true'
    //check password for criterion
    //if criterion is present move forward
    //if absent empty password and run promptValues.AddToPasswordArray over again



//The 4 thingie that I don't really get (but I'm totally willing to).

// 







       //Start a thing that chooses random values for each of the user's inputs.

    // if (promptValues.number === "True")
    // if (promptValues.lowercase === "True")
    // if (promptValues.uppercase === "True")
    // if (promptValues.symbol === "True")

   
        // if (promptValues.number === "True") {
        //     superArray = superArray.concat(numberArray);
        // }
        // if (promptValues.lowercase === "True") {
        //     superArray =superArray.concat(lowercaseArray);
        // }
        // if (promptValues.uppercase === "True") {
        //     superArray = superArray.concat(uppercaseArray);
        // }
        // if (promptValues.symbol === "True") {
        //     superArray = superArray.concat(symbolArray);
        // }
        

//check the password at the end 






// function checkPromptAndAddToSuperArray(typeRequest, myArray){
//     if(typeRequest == true){
//         superArray = superArray.concat(myArray);
//     }
// }























