var idade = 16

if ( idade < 16){
    console.log(`com ${idade} anos, não pode votar.`)
}
else if (idade < 18 || idade >= 65){
    console.log (`com ${idade} anos Voto opcional.`)
}
else {
    console.log(`com ${idade} anos Voto obrigatório.`)
}