import api from './api.js'

const ui = {
    async renderizaPensamentos() {
        const listaPensamentos = document.querySelector('#lista-pensamentos');
        try {
            const pensamentos = await api.buscarPensamentos();
            pensamentos.forEach(ui.criarPensamento);
        }
        catch (error) {
            console.error('Erro ao carregar pensamentos:', error);
        }
    },

    async criarPensamento(pensamento) {
        const listaPensamentos = document.querySelector('#lista-pensamentos');

        const li = document.createElement('li');
        li.classList.add('li-pensamento');
        li.setAttribute('data-id', pensamento.id);

        const img = document.createElement('img');
        img.src = 'assets/imagens/aspas-azuis.png';
        img.alt = 'Aspas azuis';
        img.classList.add('icone-aspas');

        const divConteudo = document.createElement('div');
        divConteudo.classList.add('pensamento-conteudo');
        divConteudo.textContent = pensamento.conteudo;

        const divAutoria = document.createElement('div');
        divAutoria.classList.add('pensamento-autoria');
        divAutoria.textContent = pensamento.autoria;

        li.appendChild(img);
        li.appendChild(divConteudo);
        li.appendChild(divAutoria);

        listaPensamentos.appendChild(li);
    }
}

export default ui;