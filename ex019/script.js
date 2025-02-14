var txtn = document.getElementById("txtn");
var res = document.getElementById("reselect");
let valores = [];
let divres = document.getElementById("divres");
function addnumber() {
  var n = Number(txtn.value);

  for (let i = 0; i < res.options.length; i++) {
    if (Number(res.options[i].value) === n) {
      alert(`O valor ${n} já foi adicionado na lista`);
      return; // Sai da função se o número já estiver na lista
    }
  }
  if (n > 100) {
    alert(" o valor " + n + " muito grande");
    return; // Sai da função se o número for negativo
  }
  let item = document.createElement("option");
  item.text = `o valor ${n} foi adicionado`;
  item.value = n;
  res.appendChild(item);
  item.selected = true;
  

  valores.push(n); // Adiciona o valor ao array
  txtn.value = ""; // Limpa o campo de texto
  txtn.focus(); // Foca no campo de texto
  divres.innerHTML = ""; // Limpa a div
}
function finalizar() {
  if (valores.length === 0) {
    alert("Adicione valores antes de finalizar");
    return; // Sai da função se não houver valores na lista
  }

  let maior = valores[0];
  let menor = valores[0];
let soma = 0;
let media= 0;

  for (let pos in valores) {
    soma += valores[pos];
    media = soma / valores.length;
    
    if (valores[pos] > maior) {
      maior = valores[pos];
    }
    if (valores[pos] < menor) {
      menor = valores[pos];
    }
    
  }

  divres.innerHTML = ""; // Limpa a div
  let total = valores.length;
  divres.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`;
  divres.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
  divres.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
  divres.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`;
  divres.innerHTML += `<p>A média dos valores é ${media}</p>`;
}
