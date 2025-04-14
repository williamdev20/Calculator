let num7 = document.getElementsByClassName("num");
let num8 = document.getElementsByClassName("num");
let num9 = document.getElementsByClassName("num");
let num4 = document.getElementsByClassName("num");
let num5 = document.getElementsByClassName("num");
let num6 = document.getElementsByClassName("num");
let num1 = document.getElementsByClassName("num");
let num2 = document.getElementsByClassName("num");
let num3 = document.getElementsByClassName("num");
let display = document.getElementById('display');
let operationA = document.getElementsByClassName("operation");
let operationS = document.getElementById("operation");
let operationM = document.getElementById("operation");
let operationd = document.getElementById("operation");
let clear = document.getElementById("clear")

const valores = [];


function exibir(botao) {
    display.value += botao.innerText;
    const number1 = parseInt(display.value);
}

function operation(oper) {
    display.value += oper.innerText;
}

function limpar(clear) {
    display.value = " ";
}

// pagina 4, 5, 7 e 8 capitulo 2 da geekie