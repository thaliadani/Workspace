//for - uma estrutura de repeticão


for(let contador = 0; contador < 4; contador++){
    console.log(contador)
}

let pontosDeVida = 0

for(let i =0; i < 10; i++){
    pontosDeVida += 1
    console.log("tomou pocao " +i)
}

console.log(pontosDeVida + " Totais") 

//while - executa um bloco de codigo enquanto uma condicao for verdadeira

let i = 0

while(i < 3){
    console.log("executado")
    i++
}

//do while - executa um bloco de codigo enquanto uma condicao for verdadeira

let contador = 0

do{
    console.log("ola")
    contador++
}while(contador < 3)