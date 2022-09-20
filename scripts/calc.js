const add = (x,y) => x + y;
const sub = (x,y) => x - y;
const mult = (x,y) => x * y;
const div = (x,y) => x / y;

const operate = (x,y,oper) => oper(x,y);

let input = [];

function evalInput(str) {
    operRegex = /\u002B|\u2212|\u00D7|\u00F7/;
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

const screen = document.querySelector("#screen"); 

function buttonPress(id) {
    switch (id) {
        case "zero":
            input.push("0");
            break;
        case "one":
            input.push("1");
            break;
        case "two":
            input.push("2");
            break;
        case "three":
            input.push("3");
            break;
        case "four":
            input.push("4");
            break;
        case "five":
            input.push("5");
            break;
        case "six":
            input.push("6");
            break;
        case "seven":
            input.push("7");
            break;
        case "eight":
            input.push("8");
            break;
        case "nine":
            input.push("9");
            break;
        case "plus":
            input.push("\u002B");
            break;
        case "minus":
            input.push("\u2212");
            break;
        case "times":
            input.push("\u00D7");
            break;
        case "divide":
            input.push("\u00F7");
            break;
        case "dot":
            input.push(".");
            break;
        case "equals":
            input.push("\u003D");
            console.log(evalInput(input.join("")));
            input = [];
            break;  
        case "clear": 
            input = [];
            break;
        case "delete":
            input.pop();
            break;
    }
    
    screen.textContent = input.join("");

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