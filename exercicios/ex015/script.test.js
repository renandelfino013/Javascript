const { JSDOM } = require('jsdom');

let document;
let n1, n2, passos, resultado;

const dom = new JSDOM(`<!DOCTYPE html>
    <body>
        <input id="n1" value="1">
        <input id="n2" value="10">
        <input id="passo" value="2">
        <div id="resposta"></div>
    </body>`);
document = dom.window.document;
n1 = document.getElementById('n1');
n2 = document.getElementById('n2');
passos = document.getElementById('passo');
resultado = document.getElementById('resposta');

function contar() {
    let num1 = Number(n1.value);
    let num2 = Number(n2.value);
    let passo = Number(passos.value);
    for (num1; num1 < num2; num1 += passo) {
        resultado.innerHTML += `${num1 + passo};`;
    }
   
}
resultado.innerHTML += "Fim";