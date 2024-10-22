//Vetor
let pokemon = ["pikachu", "charmander", "bulbasaur", "squirtle"]

pokemon.shift()
pokemon.pop()

console.log(pokemon)

//Matriz
let timePokemon=[
    ["pikachu", "M" , 1],
    ["charmander", "F" , 4],
]

console.log("O pokemon " + timePokemon[0][0] + " e do sexo " + timePokemon[0][1] + " tem o nivel " + timePokemon[0][2])
console.log(timePokemon.length)