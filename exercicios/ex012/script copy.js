var data = new Date()

var horas = data.getHours()
var escreva = document.getElementById("escreva")
var img = document.getElementById("img")
escreva.innerHTML = `Agora são exatamente ${horas} horas.`

function mudarImagem() {

if (horas >= 6 && horas < 12) {
    img.src = "tarde.jpg"
    img.alt = "Imagem de paisagem de manhã/nascer do sol"
}
else{
  if (horas > 12 && horas <= 18) {
    img.src = "noite.jpg"
    img.alt = "Imagem de paisagem de tarde/por do sol"
}
}}
