const add = (x,y) => x + y;
const sub = (x,y) => x - y;
const mult = (x,y) => x * y;
const div = (x,y) => x / y;

const operate = (x,y,oper) => oper(x,y);

function evalInput(str) {
    operRegex = /\+|\-|\*|\//;
    const operIndex = str.search(operRegex);
    const oper = str[operIndex];
    const firstNum = parseInt(str.split('').slice(0,operIndex).join(''));
    const secondNum = parseInt(str.split('').slice(operIndex + 1).join(''));

    switch (oper) {
        case "+":
            return operate(firstNum, secondNum, add);
            break;
        case "-":
            return operate(firstNum, secondNum, sub);
            break;
        case "*":
            return operate(firstNum, secondNum, mult);
            break;
        case "/":
            return operate(firstNum, secondNum, div);
            break; 
        default:
            return "ERROR";
    }
}

console.log(evalInput("12/30"));