var txtn = document.getElementById("txtn");
var res = document.getElementById("reselect");

function addnumber() {
  var n = Number(txtn.value);
  
  for (let i = 0; i < res.options.length; i++) {
			      if (Number(res.options[i].value) === n) {
        alert(`O valor ${n} já foi adicionado`);
        return; // Sai da função se o número já estiver na lista
      }
      else if (Number(res.options[i].value) <= 100) {
        alert(`O valor ${n} é muito grande`) 
    }
    
let item = document.createElement("option");
  item.text = `o valor ${n} foi adicionado`;
  item.value = n;
  res.appendChild(item);
  item.selected = true;

  
}
}
