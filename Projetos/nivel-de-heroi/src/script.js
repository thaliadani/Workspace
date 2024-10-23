let nome ='Thalia'
let xp = 10500
let categoria = ''

switch(true) {
    case xp <= 1000:
    categoria = 'ferro'
    break

    case xp >= 1001 && xp <= 2000:
    categoria = 'bronze'
    break

    case xp >= 2001 && xp <= 5000:
    categoria = 'prata'
    break  

    case xp >= 6001 && xp <= 7000:
    categoria = 'ouro'
    break    

    case xp >= 7001 && xp <= 8000:  
    categoria = 'platina'
    break

    case xp >= 8001 && xp <= 9000:  
    categoria = 'ascendente'
    break

    case xp >= 9001 && xp <= 10000:  
    categoria = 'imortal'
    break

    case xp >= 10001:  
    categoria = 'radiante'
}

console.log('A heroína ' + nome + ' está no nível ' + xp + ' e na categoria ' + categoria)