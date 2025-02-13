let num = [10, 9, 3, 4, 1, 21131];

num.sort( (a, b) => a - b);
console.log(num)
/*for (let pos=0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}*/
for (pos in num){
    console.log ( `a posição ${pos} tem o value de ${num[pos]} `)
}                                                                       