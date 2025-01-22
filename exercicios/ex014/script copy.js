var pizza = 8
function comerpizza(){
 
    pizza -= 1;


}
for ( var i = pizza; i > 0; i --){
    comerpizza()
    console.log("Comendo pizza faltam   " + i + " fatias de  " + "pizza") 
    
}
console.log("Acabou a pizza!")