// characters list
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// target elements
const generatePasswordBtn = document.getElementById("pwdButton");
const passwordDisplayOne = document.getElementById("pwdOne");
const passwordDisplayTwo = document.getElementById("pwdTwo");
const passwordLength = document.getElementById("input-length");
const alertText = document.getElementById("alert-text");

// listen to button click
generatePasswordBtn.addEventListener("click", generatePassword);

function generatePassword() {
    if(passwordLength.value > 20) {
        // alert message if input > 20
        alertText.textContent = "Please Try Again!";
    } else {
        // remove the message
        alertText.textContent = "";
        // get two random passwords
        let randomPasswordOne = "";
        let randomPasswordTwo = "";
        for(let i = 0; i < passwordLength.value; i++) {
            randomPasswordOne += getrandomCharacter();
            randomPasswordTwo += getrandomCharacter();
        }
        // render the passwords
        passwordDisplayOne.textContent = randomPasswordOne;
        passwordDisplayTwo.textContent = randomPasswordTwo;
    }
}

// function to get random character
function getrandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}
