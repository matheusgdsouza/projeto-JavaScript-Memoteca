import ui from './ui.js';
import api from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    ui.renderizaPensamentos();

    const formularioPensamento = document.querySelector('#pensamento-form');
    formularioPensamento.addEventListener('submit', enviarNovoPensamento);

    const btnCancelarFormulario = document.querySelector('#botao-cancelar');
    btnCancelarFormulario.addEventListener('click', limparFormulario);
});

async function enviarNovoPensamento(event) {
    event.preventDefault();

    const idNovoPensamento = document.querySelector('#pensamento-id').value;
    const conteudoNovoPensamento = document.querySelector('#pensamento-conteudo').value;
    const autoriaNovoPensamento = document.querySelector('#pensamento-autoria').value;

    const novoPensamento = {
        id: idNovoPensamento,
        conteudo: conteudoNovoPensamento,
        autoria: autoriaNovoPensamento
    };

    try {
        const pensamentoSalvo = await api.salvarPensamento(novoPensamento);
        ui.criarPensamento(pensamentoSalvo);
    }
    catch (error) {
        console.error('Erro ao salvar pensamento:', error);
    }
}

function limparFormulario() {
    document.querySelector('#pensamento-id').value = '';
    document.querySelector('#pensamento-conteudo').value = '';
    document.querySelector('#pensamento-autoria').value = '';
}