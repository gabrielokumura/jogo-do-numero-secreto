var listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroAleatorio = gerarNumeroAleatorio()
let tentativa = 1

exibirTextoInicial()

function verificarChute() {
    let chute = document.querySelector('input').value
    console.log('chute: ' + chute)

    if (numeroAleatorio == chute) {
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
        exibirTextoNaTela('h1', 'Acertou !')
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroAleatorio > chute) {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}.`)
        } else {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}.`)
        }

        tentativa++
        limparCampo()
    }
}

function exibirTextoInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto,
        'Brazilian Portuguese Female',
        { rate: 1.2 })
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1)
    if (listaDeNumerosSorteados.length == numeroLimite) {
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroSorteado)) {
        console.log('entrou');
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push((numeroSorteado))
        return numeroSorteado
    }

}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function novoJogo() {
    exibirTextoInicial()
    console.log('lista:' + listaDeNumerosSorteados)
    numeroAleatorio = gerarNumeroAleatorio()
    tentativa = 1
    document.getElementById('reiniciar').setAttribute('disabled', true)
    limparCampo()
}