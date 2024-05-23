//comparadores logicos

let estaEnsolarado = true
let temDinheiro = true
let temTempo = true

let podeSairParaPasseio = (estaEnsolarado && temDinheiro) || temTempo


if (podeSairParaPasseio) {
    console.log("Pode sair para um passeio")
} else {
    console.log("Não pode sair para um passeio")
}
