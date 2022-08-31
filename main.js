let operator = "";
let previousValue = "";
let currentValue = "";


const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const clear = document.querySelector(".clear");

const decimal = document.querySelector(".decimal")

const equal = document.querySelector(".equal")

const currentScreen = document.querySelector(".current")
const previousScreen = document.querySelector(".previous")

numbers.forEach((number)=>{
    number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue
    })
})
console.log("hi") 
operators.forEach((op)=>op.addEventListener("click", function(e){
    handleOperator(e.target.textContent)
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue
}))

function handleNumber(num) {
    if(currentValue.length <=5){
        currentValue += num
    }
    
}

function handleOperator (op) {
    operator = op;
    previousValue = currentValue;
    currentValue = ''
}
clear.addEventListener("click", function (){
    currentScreen.textContent = ''
    previousScreen.textContent = ''
    previousValue = '';
    currentValue ='';
    operator = '';
})

equal.addEventListener("click", function(){
    
    if(currentValue != '' && previousValue != '') {
        calculate();
        previousScreen.textContent = '';
    currentScreen.textContent = previousValue
    }
    
})

function calculate (){
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)
    
    if(operator === "+") {
        previousValue+=currentValue
    }
    else if (operator === "-")
    {
        previousValue-=currentValue
    }
    else if (operator === "x")
    {
        previousValue *= currentValue
    }
    else {previousValue /= currentValue};

    previousValue = roundNum(previousValue);

    previousValue= previousValue.toString()

    currentValue= previousValue.toString()

    console.log(previousValue)
}
function roundNum(num) {
     return Math.round(num*1000)/1000
}