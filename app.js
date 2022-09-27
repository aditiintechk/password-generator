// characters list
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// target elements

function query(id) {
    return document.getElementById(id);
}
const generatePasswordBtn = query("pwdButton");
const passwordDisplayOne = query("pwdOne");
const passwordDisplayTwo = query("pwdTwo");
const passwordLength = query("input-length");
const alertText = query("alert-text");

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

// click to copyToCLipboard option

const copyPwdEl = document.getElementById("copy-pwd");
function copy(currentPwd) {
    navigator.clipboard.writeText(currentPwd.textContent).then(function() {
        let pwd = currentPwd.textContent;
        if(pwd === '') {
            copyPwdEl.textContent = "Password is not Generated";
        } else {
            copyPwdEl.textContent = "Password is Copied to Clipboard";
            console.log(currentPwd.textContent);
        }
    });

    setTimeout(function () {
        copyPwdEl.textContent = "Click to Copy the Password";
        copyPwdEl.style.display = none;
      }, 3000);

}


// setting the theme

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);