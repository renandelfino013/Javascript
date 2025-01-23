var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var passos = document.getElementById("passo");
var resultado = document.getElementById("resposta");

function contar() {
  var num1 = Number(n1.value);
  var num2 = Number(n2.value);
  var passo = Number(passos.value);
  resultado.innerHTML = "";
  if (
    n1.value.length == 0 ||
    n2.value.length == 0 ||
    passos.value.length == 0
  ) {
    alert("Todos os campos devem estar preenchidos!");
    
  } 
  
 else if (passo == 0) {
    alert("Passo inválido! Considerando ");
   resultado.innerHTML = "passo invalido";
 }
  
  
  else if (num1 + passo < num2) {
    for (var i = num1; i <= num2; i += passo) {
      resultado.innerHTML += ` ${i} \u{1F603}`;
    }
  } else {
    for (var i = num1; i >= num2; i -= passo) {
      resultado.innerHTML += ` ${i} \u{1F603}`;
    }
  }
  resposta.innerHTML += ` \u{1F3C1} Fim`;
}
