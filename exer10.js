//condicionais


let nota = 85;


if (nota >= 90 && nota <= 100) {
    console.log("Parabéns, sua nota foi A")

} else if (nota >= 80 && nota <= 89) {
    console.log("Bom trabalho, sua nota foi B")

} else if (nota >= 70 && nota <= 79) {
    console.log("Acima da média, sua nota foi C")

} else if (nota >= 60 && nota <= 69) {
    console.log("Na média, sua nota foi D")

} else if (nota >= 0 && nota <= 59) {
    console.log("Se esforce mais, sua nota foi F")

} else {
    console.log("Erro: Nota fora do intervalo válido")
}
