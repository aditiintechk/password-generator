const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generatePasswordBtn = document.getElementById("pwdButton");
const passwordDisplayOne = document.getElementById("pwdOne");
const passwordDisplayTwo = document.getElementById("pwdTwo");
const passwordLength = document.getElementById("input-length");
const alertText = document.getElementById("alert-text");

console.log(passwordLength.value)
generatePasswordBtn.addEventListener("click", generatePassword);

function generatePassword() {
    if(passwordLength.value > 20) {
        alertText.textContent = "Please Try Again!";
    } else {
        alertText.textContent = ""
        let randomPasswordOne = "";
        let randomPasswordTwo = "";
        for(let i = 0; i < passwordLength.value; i++) {
            randomPasswordOne += getrandomCharacter();
            randomPasswordTwo += getrandomCharacter();
        }
        passwordDisplayOne.textContent = randomPasswordOne;
        passwordDisplayTwo.textContent = randomPasswordTwo;
    }
}

function getrandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

window.onload = function(){
    passwordLength.value=""
}
