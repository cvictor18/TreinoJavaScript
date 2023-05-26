var idade = 22

if (idade < 16) {
    console.log(`Não vota, pois tem ${idade} anos`)
} else if (idade < 18) {
        console.log(`Voto opcional, pois tem ${idade} anos`)
    } else if (idade < 65) {
        console.log(`Voto obrigatório, pois é maior de idade`)
    } else {
        console.log(`Voto opcional, pois tem 65 anos ou mais`)
    }