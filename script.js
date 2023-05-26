var resultado = window.document.getElementById('res')//recebe a div#res
function verificar() {
    var idade = Number(window.document.getElementById('ipti').value)//recebe o valor do input idade, convertido em number
    if (idade == 0) {
        window.alert(`Por gentileza, insira uma idade!`)
    } else if (idade == 1) {
        resultado.innerHTML = `<p>Com ${idade} ano você não pode votar</p>`
    } else if (idade > 1 && idade < 16) {
        resultado.innerHTML = `<p>Com ${idade} anos você não pode votar</p>`
    } else if (idade >= 18 && idade < 71) {
        resultado.innerHTML = `<p>Com ${idade} anos o voto é obrigatório</p>`
    } else {
        resultado.innerHTML = `<p>Com ${idade} anos o voto é opcional</p>`
    }
}