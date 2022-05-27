const listaPersonagens = document.querySelectorAll('.personagem')

listaPersonagens.forEach(personagem => {
    personagem.addEventListener('click', () => {
        const personagemAnterior = document.querySelector('.selecionado')
        personagemAnterior.classList.remove('selecionado')
        const personagemSelecionado = personagem
        const personagemGrande = document.getElementById(personagemSelecionado.attributes.id.value)
        personagemGrande.classList.add('selecionado')

        const imgNome = personagemSelecionado.attributes.id.value + '.png'
        const imgP1 = document.getElementById('personagem-jogador-1')
        imgP1.src="src/imagens/" + imgNome

        const nomePersonagem = personagemSelecionado.getAttribute('data-name')
        const nomeAtivo = document.querySelector('.nome')
        nomeAtivo.innerHTML = "<h2>" + nomePersonagem + "<h2>"

        const span = document.querySelector('.tag')
        span.remove();
        var jogador1 = document.createElement('span')
        jogador1.classList.add('tag')
        jogador1.innerHTML = '1P'
        personagemSelecionado.appendChild(jogador1)
    })
})