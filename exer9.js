//condicionais

let idade = 16;


if (idade >= 18 && idade < 65) {
    console.log("Adulto")
} 

else if (idade < 18) {
    console.log("Menor de idade")
} 

else if (idade >= 65) {
    console.log("Idoso")
} 

else {
    console.log("Erro: Idade fora do intervalo válido")
}
