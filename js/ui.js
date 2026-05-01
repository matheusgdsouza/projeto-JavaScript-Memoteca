import api from './api.js'

const ui = {

    // Função criada para buscar os pensamentos da API e renderizá-los na tela, utilizando o método GET
    async renderizaPensamentos() {
        const listaPensamentos = document.querySelector('#lista-pensamentos');
        
        try {
            const pensamentos = await api.buscarPensamentos();
            listaPensamentos.innerHTML = ''; // Limpa a lista de pensamentos antes de renderizar os novos dados
            pensamentos.forEach(ui.criarPensamento); // Para cada pensamento retornado pela API, a função criarPensamento é chamada para renderizá-lo na tela
        }
        catch (error) {
            console.error('Erro ao carregar pensamentos:', error);
        }
    },

    // Função criada para criar um novo card de pensamento, utilizando os dados retornados pela API
    criarPensamento(pensamento) {
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

        const divBotoes = document.createElement('div');
        divBotoes.classList.add('icones');

        const btnEditar = document.createElement('button');
        btnEditar.classList.add('botao-editar');
        btnEditar.alt = 'Editar pensamento';
        btnEditar.addEventListener('click', () => ui.preencherFormulario(pensamento)); // Ao clicar no botão de editar, a função preencherFormulario 

        const imgEditar = document.createElement('img');
        imgEditar.src = 'assets/imagens/icone-editar.png';
        imgEditar.alt = 'Ícone de editar';
        btnEditar.appendChild(imgEditar);

        const btnExcluir = document.createElement('button');
        btnExcluir.classList.add('botao-excluir');
        btnExcluir.alt = 'Excluir pensamento';
        btnExcluir.addEventListener('click', () => api.deletarPensamento(pensamento)); // Ao clicar no botão de excluir, afunção deletarPensamento é chamada para excluir o pensamento da API e da tela

        const imgExcluir = document.createElement('img');
        imgExcluir.src = 'assets/imagens/icone-excluir.png';
        imgExcluir.alt = 'Ícone de excluir';
        btnExcluir.appendChild(imgExcluir);
        
        li.appendChild(img);
        li.appendChild(divConteudo);
        li.appendChild(divAutoria);
        li.appendChild(divBotoes);
        divBotoes.appendChild(btnEditar);
        divBotoes.appendChild(btnExcluir);
        listaPensamentos.appendChild(li);
    },

    // Função criada para preencher o formulário de edição com os dados do pensamento selecionado, utilizando o método GET da API
    async preencherFormulario(pensamento) {
        try {
            await api.buscarPensamento(pensamento.id);
        }
        catch (error) {
            console.error('Erro ao buscar pensamento:', error);
        }
        document.querySelector('#pensamento-id').value = pensamento.id;
        document.querySelector('#pensamento-conteudo').value = pensamento.conteudo;
        document.querySelector('#pensamento-autoria').value = pensamento.autoria;
    },

    // Função criada para limpar o formulário de edição
    limparFormulario() {
        document.querySelector('#pensamento-id').value = '';
        document.querySelector('#pensamento-conteudo').value = '';
        document.querySelector('#pensamento-autoria').value = '';
    }
}

export default ui;