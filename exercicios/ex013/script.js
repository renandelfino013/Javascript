var resposta = document.getElementById("resp");
var imagen = document.getElementById("imagen");
var homem = document.getElementById("male");
var mulher = document.getElementById('female')

function verificar() {
  var datanascimento = document.getElementById("qntsanos").value;
  
  var numberdatanascimento = Number(datanascimento);
  
  var data = new Date();
  
  var anoatual = data.getFullYear();
  
  var idade = anoatual - numberdatanascimento;
  
  var sexo = homem.checked? "Homem" : mulher.checked? "Mulher" : "Sem sexo definido";
  
    resposta.innerHTML = `Identificamos ${sexo} de ${idade} anos.`;
    
    if (idade > 0 && idade <= 12 && sexo == "Homem"){ 
      imagen.src = "imagens/crianças-10-anos.png"; 
      imagen.alt = "Imagem de uma criança";
    }
    else if (idade >= 12 && idade <= 18){
        imagen.src = "adolescente.jpg";
      imagen.alt = "Imagem de um adolescente";
    }
    else if (idade >= 18 && idade <= 30){
        imagen.src = "adulto.jpg";
      imagen.alt = "Imagem de ";
    }

}
