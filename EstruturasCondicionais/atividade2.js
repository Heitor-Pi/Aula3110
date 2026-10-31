let compra = 10

if(compra >= 200){
    desconto = (compra*20)/100
    console.log("o valor do desconto é "+desconto)
} else if(compra >= 100){
    desconto = (compra*10)/100
    console.log("o valor do desconto é "+desconto)
} else {
    console.log("Você não obteve desconto")
}