const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.querySelector(".results-div"); //will add/remove hidden 
const userInput = document.querySelector(".user-input");

let originalInputText = "";

const cleanInputText = (text) => {
 console.log(text); //We get the pure user input to our cleaner function.
 originalInputText = text; //We need to store the original input for later.
 let cleanInput = text.replace(/[^a-z0-9]/gi, '').toLowerCase(); //Clean the input.
 isPalindrome(cleanInput);
};
function isPalindrome(text){
  console.log("this is the reversed string: " + text.split('').reverse().join(''));
  if (text === ((text) => {return text.split('').reverse().join('');})(text)){ //Check if palindrome
    //Do if text is a palindrome
    resultDiv.classList.remove("hidden");
    userInput.innerText  = `${originalInputText} is a palindrome.`;
    console.log(text + " is a palindrome.");
  }else{
    //Do if text is not a palindrome
    resultDiv.classList.remove("hidden");
    userInput.innerText =  `${originalInputText} is not a palindrome.`;
  }
}
function reset(){
  //Reset the system for a new input idk if well need this
}

checkButton.addEventListener("click", () => textInput.value ? cleanInputText(textInput.value) : alert("Please input a value"));

