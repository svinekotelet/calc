const add = (x,y) => x + y;
const sub = (x,y) => x - y;
const mult = (x,y) => x * y;
const div = (x,y) => x / y;

const operate = (x,y,oper) => oper(x,y);

console.log(operate(100,2122,add));
console.log(operate(33333,11111,sub));
console.log(operate(12,14,mult));
console.log(operate(812,4,div));