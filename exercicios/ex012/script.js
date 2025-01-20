var data = new Date();
var hora = 20
var agr = document.getElementById("agr");
var imagen = document.getElementById("img");
agr.innerHTML = `Agora são exatamente ${hora} horas.`;
function mudarImagen() {
  if (hora >= 6 && hora <= 12) {
    img.src = "imagens/manha.jpg";
    img.alt = "imagen de paisagen de manhã/nascer do sol";
  } else if (hora > 12 && hora <= 18) {
    img.src = "imagens/tarde.jpg";
    img.alt = "imagen de paisagen de tarde/por do sol";
  } else {
    imagen.src = "imagens/noite.jpg";
    imagen.alt = "imagen de paisagen de noite/lua";
  }
}
mudarImagen();