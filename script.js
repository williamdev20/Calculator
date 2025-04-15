let num7 = document.getElementsByClassName("num");
let num7I = document.getElementById("num7")
let num8 = document.getElementsByClassName("num");
let num8I = document.getElementById("num8");
let num9 = document.getElementsByClassName("num");
let num9I = document.getElementById("num9");
let num4 = document.getElementsByClassName("num");
let num4I = document.getElementById("num4");
let num5 = document.getElementsByClassName("num");
let num5I = document.getElementById("num5");
let num6 = document.getElementsByClassName("num");
let num6I = document.getElementById("num6");
let num1 = document.getElementsByClassName("num");
let num1I = document.getElementById("num1");
let num2 = document.getElementsByClassName("num");
let num2I = document.getElementById("num2");
let num3 = document.getElementsByClassName("num");
let num3I = document.getElementById("num3");
let num0 = document.getElementsByClassName("num");
let num0I = document.getElementById("num0");
let display = document.getElementById('display');
let operationA = document.getElementsByClassName("operation");
let operationS = document.getElementById("operation");
let operationM = document.getElementById("operation");
let operationd = document.getElementById("operation");
let clear = document.getElementById("clear")

let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;
let number5 = 0;
let number6 = 0;
let number7 = 0;
let number8 = 0;
let number9 = 0;
let number0 = 0;

let valoresDisplay = [];


function exibir1(botao) {
    display.value += botao.innerText;
    valoresDisplay += botao.innerText;
    number1 = 1;
    //alert("valor de number1: " + number1);
}

function exibir2(botao) {
    display.value += botao.innerText;
    valoresDisplay += botao.innerText;
    number2 = 2;
    //alert(number2);
}

function exibir3(botao) {
    display.value += botao.innerText;
    valoresDisplay += botao.innerText;
    number3 = 3;
    //alert(number3);
}

function exibir4(botao) {
    display.value += botao.innerText;
    valoresDisplay += botao.innerText;
    number4 = 4;
    //alert(number4);
}

function exibir5(botao) {
    display.value += botao.innerText;
    valoresDisplay += botao.innerText;
    number5 = 5;
    //alert(number5);
}

function exibir6(botao) {
    display.value += botao.innerText;
    valoresDisplay += botao.innerText;
    number6 = 6;
    //alert(number6);
}

function exibir7(botao) {
    display.value += botao.innerText;
    valoresDisplay += botao.innerText;
    number7 = 7;
    //alert(number7);
}

function exibir8(botao) {
    display.value += botao.innerText;
    valoresDisplay += botao.innerText;
    number8 = 8;
    //alert(number8);
    
}

function exibir9(botao) {
    display.value += botao.innerText;
    valoresDisplay += botao.innerText;
    number9 = 9;
    //alert(number9);
}

function exibir0(botao) {
    display.value += botao.innerText;
    valoresDisplay += botao.innerText;
    number0 = 0;
    //alert(number0);
}

function operationP(oper) {
    display.value += oper.innerText;
}

function limpar(clear) {
    display.value = " ";
}

function calcular() {

   

    display.value = number0 + number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8 + number9;
    alert(valoresDisplay)

}
