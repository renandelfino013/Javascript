let amigo = {
  nome: "josé",
  idade: "35",
  peso: 85.4,
  engordar(p = 0) {
    console.log("Engordou");
    this.peso += p;
  }}
amigo.engordar(20);
console.log(`${amigo.nome} pesa ${amigo.peso}kg`);
