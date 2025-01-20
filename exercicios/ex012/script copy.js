var data = new Date();
var hora = data.getHours();
var agr = document.getElementById("agr");
var imagem = document.getElementById("img");

if (agr) {
  agr.innerHTML = `Agora são exatamente ${hora} horas.`;
}

function mudarImagem() {
  if (hora >= 6 && hora < 12) {
    imagem.src = "imagens/manha.jpg";
    imagem.alt = "imagem de paisagem de manhã/nascer do sol";
  } else if (hora >= 12 && hora < 18) {
    imagem.src = "imagens/tarde.jpg";
    imagem.alt = "imagem de paisagem de tarde/por do sol";
  } else {
    imagem.src = "imagens/noite.jpg";
    imagem.alt = "imagem de paisagem de noite/lua";
  }
}

// Chama a função para mudar a imagem
mudarImagem();
