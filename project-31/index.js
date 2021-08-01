const resultEl = document.getElementById("result");
const clipboardEl = document.getElementById("clipboard");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generatePassword");


clipboardEl.addEventListener("click",()=>{
    const textarea = document.createElement("textarea");
    const password = resultEl.innerText;
    if(password === ""){return ""}
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password is copied to your clipboard");
})

generateEl.addEventListener("click",()=>{
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

     resultEl.innerText = generatePassword(length,hasLower,hasUpper,hasNumber,hasSymbol);
})

function generatePassword(length,lower,upper,number,symbol){
    let generatedPassword = "";
    const typesSum = lower+upper+number+symbol;
    const typesArray = [{lower:lower},{upper:upper},{number:number},{symbol:symbol}].filter(
        item=>{
            if(Object.values(item)[0]===true){
                return Object.values(item)[0]; 
            }
            else {return ""}
        } 
    );

    if(typesSum === 0){
        return "";
    }
    for(let i = 0;i<length;i+=typesSum){
        typesArray.forEach(type=>{
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })
    }

    let finalPassword = generatedPassword.slice(0,length);
    return finalPassword;

}


const randomFunc={
    lower:generateRandomLower,
    upper:generateRandomUpper,
    number:generateRandomNumber,
    symbol:generateRandomSymbols
}



function generateRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}


function generateRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function generateRandomNumber(){
    return Math.floor(Math.random()*10);
}

function generateRandomSymbols(){
    const string = "!@#$%^&*_{}<>?,.";
    return string[Math.floor(Math.random()*16)];

}
