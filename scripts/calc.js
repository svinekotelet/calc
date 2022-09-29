const add = (x,y) => x + y;
const sub = (x,y) => x - y;
const mult = (x,y) => x * y;
const div = (x,y) => x / y;

const operate = (x,y,oper) => oper(x,y);
const operRegex = /\u002B|\u2212|\u00D7|\u00F7/;

let topInput = [];
let botInput = []; 

function evalInput(str) {
    const operIndex = str.search(operRegex);
    const oper = str[operIndex];
    const firstNum = parseInt(str.split('').slice(0,operIndex).join(''), 10);
    const secondNum = parseInt(str.split('').slice(operIndex + 1).join(''), 10);

    switch (oper) {
        case "\u002B":
            return operate(firstNum, secondNum, add);
            break;
        case "\u2212":
            return operate(firstNum, secondNum, sub);
            break;
        case "\u00D7":
            return operate(firstNum, secondNum, mult);
            break;
        case "\u00F7":
            return operate(firstNum, secondNum, div);
            break; 
        default:
            return "ERROR";
    }
}

const topScreen = document.querySelector("#topScreen"); 
const bottomScreen = document.querySelector("#bottomScreen"); 

function buttonPress(id) {
    switch (id) {
        case "zero":
            botInput.push("0");
            break;
        case "one":
            botInput.push("1");
            break;
        case "two":
            botInput.push("2");
            break;
        case "three":
            botInput.push("3");
            break;
        case "four":
            botInput.push("4");
            break;
        case "five":
            botInput.push("5");
            break;
        case "six":
            botInput.push("6");
            break;
        case "seven":
            botInput.push("7");
            break;
        case "eight":
            botInput.push("8");
            break;
        case "nine":
            botInput.push("9");
            break;
        case "plus":
            if (botInput[botInput.length - 1] == "\u002B" || botInput[botInput.length - 1] == "\u2212" || botInput[botInput.length - 1] == "\u00D7" || botInput[botInput.length - 1] == "\u00F7") {
                return;
            }
            if (botInput.includes("\u002B") || botInput.includes("\u2212") || botInput.includes("\u00D7") || botInput.includes("\u00F7")) {
                botInput.push("\u003D");
                topInput = botInput;
                topScreen.textContent = topInput.join('');
                let evaluation = evalInput(botInput.join(''));
                botInput = [];
                botInput.push(evaluation);
            }
            botInput.push("\u002B");
            break;
        case "minus":
            if (botInput[botInput.length - 1] == "\u002B" || botInput[botInput.length - 1] == "\u2212" || botInput[botInput.length - 1] == "\u00D7" || botInput[botInput.length - 1] == "\u00F7") {
                return;
            }
            if (botInput.includes("\u002B") || botInput.includes("\u2212") || botInput.includes("\u00D7") || botInput.includes("\u00F7")) {
                botInput.push("\u003D");
                topInput = botInput;
                topScreen.textContent = topInput.join('');
                let evaluation = evalInput(botInput.join(''));
                botInput = [];
                botInput.push(evaluation);
            }
            botInput.push("\u2212");
            break;
        case "times":
            if (botInput[botInput.length - 1] == "\u002B" || botInput[botInput.length - 1] == "\u2212" || botInput[botInput.length - 1] == "\u00D7" || botInput[botInput.length - 1] == "\u00F7") {
                return;
            }
            if (botInput.includes("\u002B") || botInput.includes("\u2212") || botInput.includes("\u00D7") || botInput.includes("\u00F7")) {
                botInput.push("\u003D");
                topInput = botInput;
                topScreen.textContent = topInput.join('');
                let evaluation = evalInput(botInput.join(''));
                botInput = [];
                botInput.push(evaluation);
            }
            botInput.push("\u00D7");
            break;
        case "divide":
            if (botInput[botInput.length - 1] == "\u002B" || botInput[botInput.length - 1] == "\u2212" || botInput[botInput.length - 1] == "\u00D7" || botInput[botInput.length - 1] == "\u00F7") {
                return;
            }
            if (botInput.includes("\u002B") || botInput.includes("\u2212") || botInput.includes("\u00D7") || botInput.includes("\u00F7")) {
                botInput.push("\u003D");
                topInput = botInput;
                topScreen.textContent = topInput.join('');
                let evaluation = evalInput(botInput.join(''));
                botInput = [];
                botInput.push(evaluation);
            }
            botInput.push("\u00F7");
            break;
        case "dot":
            botInput.push(".");
            break;
        case "equals":
            botInput.push("\u003D");
            topInput = botInput;
            topScreen.textContent = topInput.join('');
            let evaluation = evalInput(botInput.join(''));
            botInput = [];
            botInput.push(evaluation);
            break;  
        case "clear": 
            topInput = [];
            topScreen.textContent = topInput.join("");
            botInput = [];
            break;
        case "delete":
            botInput.pop();
            break;
    }
    
    let output = botInput.join("");
    if (botInput.length > 13) {
        output = "OVERFLOW";
    }
    if (output.length > 13) {
        output = output.substring(0,13);
    }
    bottomScreen.textContent = output;

}





const oneBtn = document.querySelector("#one");
oneBtn.addEventListener("click", () => buttonPress("one"));

const twoBtn = document.querySelector("#two");
twoBtn.addEventListener("click", () => buttonPress("two"));

const threeBtn = document.querySelector("#three");
threeBtn.addEventListener("click", () => buttonPress("three"));

const fourBtn = document.querySelector("#four");
fourBtn.addEventListener("click", () => buttonPress("four"));

const fiveBtn = document.querySelector("#five");
fiveBtn.addEventListener("click", () => buttonPress("five"));

const sixBtn = document.querySelector("#six");
sixBtn.addEventListener("click", () => buttonPress("six"));

const sevenBtn = document.querySelector("#seven");
sevenBtn.addEventListener("click", () => buttonPress("seven"));

const eightBtn = document.querySelector("#eight");
eightBtn.addEventListener("click", () => buttonPress("eight"));

const nineBtn = document.querySelector("#nine");
nineBtn.addEventListener("click", () => buttonPress("nine"));

const zeroBtn = document.querySelector("#zero");
zeroBtn.addEventListener("click", () => buttonPress("zero"));

const plusBtn = document.querySelector("#plus");
plusBtn.addEventListener("click", () => buttonPress("plus"));

const minusBtn = document.querySelector("#minus");
minusBtn.addEventListener("click", () => buttonPress("minus"));

const timesBtn = document.querySelector("#times");
timesBtn.addEventListener("click", () => buttonPress("times"));

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", () => buttonPress("divide"));

const dotBtn = document.querySelector("#dot");
dotBtn.addEventListener("click", () => buttonPress("dot"));

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => buttonPress("equals"));

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => buttonPress("clear"));

const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", () => buttonPress("delete"));