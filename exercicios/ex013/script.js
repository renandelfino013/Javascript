var resposta = document.getElementById("resp");
var imagen = document.getElementById("imagen");
var homem = document.getElementById("male");
var mulher = document.getElementById("female");

function verificar() {
  var datanascimento = document.getElementById("qntsanos").value;

  var numberdatanascimento = Number(datanascimento);

  var data = new Date();

  var anoatual = data.getFullYear();

  var idade = anoatual - numberdatanascimento;

  var sexo = homem.checked
    ? "Homem"
    : mulher.checked
    ? "Mulher"
    : "Sem sexo definido";

  
    resposta.innerHTML = `Identificamos ${sexo} de ${idade} anos.`;
    if(datanascimento== ""){
      alert("Por favor, digite o ano de nascimento");
      resposta.innerHTML = `Por favor, digite o ano de nascimento`;
    }
    else if(idade <= 0){
      alert("Ano de nascimento inválido");
      resposta.innerHTML = `Ano de nascimento inválido`;
    }
  
  
    //-----------------------Homem-----------------------------------------
  else if (idade >= 1 && idade <= 12 && sexo == "Homem") {
    imagen.src = "imagens/bebe-no-sofa.jpg";
    imagen.alt = "Imagem de uma criança";
  } else if (idade >= 12 && idade <= 18 && sexo == "Homem") {
    imagen.src = "imagens/mlk-cara-surrada.png";
    imagen.alt = "Imagem de um adolescente";
  } else if (idade >= 18 && idade <= 30 && sexo == "Homem") {
    imagen.src = "imagens/jovem-20-anos-sorrindo-fundo-preto-e-branco.png";
    imagen.alt = "Imagem de um jovem";
  } else if (idade > 30 && idade <= 55 && sexo == "Homem") {
    imagen.src = "imagens/homem-40-anos-barba-loira.png";
    imagen.alt = "Imagem de um homem de meia idade";
  } else if (idade > 55 && idade <= 110 && sexo == "Homem") {
    imagen.src = "imagens/idoso-60-anos-braço-cruzado-de-terno.jpg";
    imagen.alt = "Imagem de um idoso";
  }

  //-----------------------Mulher------------------------------------------
  else if (idade >= 0 && idade <= 12 && sexo == "Mulher") {
    imagen.src = "imagens/bebe-sorrindo.jpg";
    imagen.alt = "Imagem de uma criança";
  } else if (idade >= 12 && idade <= 18 && sexo == "Mulher") {
    imagen.src = "imagens/menina-16-anos.png";
    imagen.alt = "Imagem de uma adolescente";
  } else if (idade >= 18 && idade <= 30 && sexo == "Mulher") {
    imagen.src = "imagens/mulher-20-anos-vestido-vermelho.png";
    imagen.alt = "Imagem de uma jovem";
  } else if (idade > 30 && idade <= 55 && sexo == "Mulher") {
    imagen.src = "imagens/mulher-40-anos-segurando-balões.jpg";
    imagen.alt = "Imagem de uma mulher de meia idade";
  } else if (idade > 55 && idade <= 110 && sexo == "Mulher") {
    imagen.src = "imagens/idosa-65-anos.png";
    imagen.alt = "Imagem de uma idosa";
  } else {
    imagen.src = "imagens/sem-imagem.jpg";
    imagen.alt = "Imagem não encontrada";
  }
}
