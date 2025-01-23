var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var passos = document.getElementById("passo");
var resultado = document.getElementById("resposta");

function somar() {}

function contar() {
  var num1 = Number(n1.value);
  var num2 = Number(n2.value);
  var passo = Number(passos.value);
    if (num1 + passo < num2){
    for (num1; num1 < num2; num1 += passo) {
        resultado.innerHTML += ` ${num1 + passo};`;}

  }
  
}
 if (num1 + passo >= num2){
    resultado.innerHTML += `Fim`
  }

 




