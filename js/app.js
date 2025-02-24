let jogosAlugados = 1
function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let img = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    if (botao.classList.contains('dashboard__item__button--return')){
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            img.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--
        }
    } else {
        img.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
        jogosAlugados++
    }
    contarEExibirJogosAlugados()
}