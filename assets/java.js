var resultEL = document.getElementById('result')
var lengthEL = document.getElementById('length')
var uppercaseEL = document.getElementById('uppercase')
var lowercaseEL = document.getElementById('lowercase')
var specialEL = document.getElementById('special')
var numbersEL = document.getElementById('numbers')
var generateEL = document.getElementById('generate')
var clipboardEL = document.getElementById('clipboard')

var rand = {
    lower: getLower,
    upper: getUpper,
    number: getNumber,
    special: getSpecial 
};
generateEL.addEventListener('click', () => {
    var length = lengthEL.value;
    var hasLower = lowercaseEL.checked;
    var hasUpper = uppercaseEL.checked;
    var hasNumbers = numbersEL.checked;
    var hasSpecial = specialEL.checked;

    

    resultEL.innerText = generatePass(hasLower, hasUpper, hasNumbers, hasSpecial,  length)
});


function generatePass(lower, upper, number, special, length) {
    let generatedPass = '';

    var typesCount = lower + upper + number + special;

    var typesArr = [{ lower }, { upper }, { number} , { special }].filter(item => Object.values(item)[0])

    if (typesCount === 0) {
        return '';
    }
    
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            var funcName = Object.keys(type) [0];
            
            generatedPass += rand[funcName] ();
        });
    }
    var finalpass = generatedPass.slice(0, length);
        return finalpass;     
}

function getLower() {
    return String.fromCharCode(Math.random() * 26 + 97);
}

function getUpper() {
    return String.fromCharCode(Math.random() * 26 + 65);
}
function getSpecial() {
    var special = '!@#$%^&*()+-=';
    return special[Math.floor(Math.random() * special.length)];
}
function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
 
 
