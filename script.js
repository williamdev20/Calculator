let display = document.getElementById('display');

function exibir(botao) {
    display.value += botao.innerText;
}

function operation(oper) {
    display.value += oper.innerText;

}

function ponto(pont) {
    display.value += pont.innerText;
}

function limpar(clear) {
    display.value = " ";
}

function calcular() {
    try {
        display.value = eval(display.value.replace("X", "*"));
    } catch (error) {
        alert("Erro na expressão!")
    }
}
