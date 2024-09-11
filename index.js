function add(x, y){
    answer = x + y
    return answer
}

function subtract(x, y){
    answer = x - y
    return answer
}

function multiply(x, y){
    answer = x * y
    return answer
}

function division(x, y){
    answer = x / y
    return answer
}


100
let x = Number(prompt("Enter First Number: "));
let y = Number(prompt("Enter Second Number: "));

alert(" Select Operator ")
alert(" 1) add ")
alert(" 2) subtraction ")
alert(" 3) multiply ")
alert(" 4) division ")
let Operator = prompt(" Enter Number for Operator: ")

if (Operator == "1"){
    answer = add(x, y)
} else if (Operator == "2"){
    answer = subtract(x, y)
} else if (Operator == "3"){
    answer = multiply(x, y)
} else if (Operator == "4"){
    answer = division(x, y)
} else {
    console.log("Wrong Input")
}

alert(answer)