let estaLigado = false
let canal = ""

//if - apenas condicoes verdadeiras
if (estaLigado) {
    canal= 13
}

console.log("A TV esta ligada em qual canal? " + canal)
/////////////////////////////////////////////////

let possuiOvos= false
let itensComprados = ""

if (possuiOvos) {
    itensComprados = "Leite"
}
//else - apenas condicoes falsas
else{
    console.log("Não possui ovos")
    itensComprados = "Queijo"
}

console.log("O cliente comprou: " + itensComprados)
/////////////////////////////////////////////////

let nivelDeFome = 1

if(nivelDeFome == 1){
    console.log("pouca fome")

}else if(nivelDeFome == 2){
    console.log("fome mediana")

}else{
    console.log("fome grande")
}
