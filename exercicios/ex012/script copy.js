var data = new Date()

var horas = data.getHours()
var escreva = document.getElementById("escreva")
var img = document.getElementById("img")
escreva.innerHTML = `Agora são exatamente ${horas} horas.`

function mudarimagem() {

if (horas >= 6 && horas < 12) {
    img.src = "manha.jpg"
    img.alt = "Imagem de paisagem de manhã/nascer do sol"
    document.body.style.backgroundColor = "#cbb95b"
}
else if(horas >= 12 && horas <= 18)
    {
    img.src = "tarde.jpg"
    img.alt = "Imagem de paisagem de tarde/por do sol"
    document.body.style.backgroundColor = "#ab5f2e"
    

}
else{
  img.src = "noite.jpg"
    img.alt = "Imagem de paisagem de noite/lua"
    document.body.style.backgroundColor = "#172d38"
 
}
}
