function gerartabuada() {
    var num = document.getElementById("txtn");
    var tabuada = document.getElementById("setabuada");
    tabuada.innerHTML = ""; // Limpa o conteúdo do select
    if (num.value.length == 0) {
        alert("Por favor, insira um número!");
    } else {
        let numb = Number(num.value);
        let c = 1;
        while (c <= 10) {
            let item = document.createElement("option");
            item.text = `${numb} x ${c} = ${numb * c}`;
            
            // Adiciona o item à lista de select
            item.value = `tab${c}`;
            
            // Insere o item na lista de select            
            item.selected = true;
            tabuada.appendChild(item);
            c++;
        }
    }
}
