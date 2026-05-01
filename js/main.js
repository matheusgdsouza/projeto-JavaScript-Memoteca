import ui from './ui.js';
import api from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    ui.renderizaPensamentos();

    const formularioPensamento = document.querySelector('#pensamento-form');
    formularioPensamento.addEventListener('submit', enviarNovoPensamento);

    const btnCancelarFormulario = document.querySelector('#botao-cancelar');
    btnCancelarFormulario.addEventListener('click', ui.limparFormulario);
});

async function enviarNovoPensamento(event) {
    event.preventDefault();

    const idNovoPensamento = document.querySelector('#pensamento-id').value;
    const conteudoNovoPensamento = document.querySelector('#pensamento-conteudo').value;
    const autoriaNovoPensamento = document.querySelector('#pensamento-autoria').value;

    if(!conteudoNovoPensamento || !autoriaNovoPensamento) {
        alert('Por favor, preencha todos os campos antes de enviar o pensamento.');
        return;
    }

    try {
        if(idNovoPensamento) {
            await api.editarPensamento({ id: idNovoPensamento, conteudo: conteudoNovoPensamento, autoria: autoriaNovoPensamento });
            ui.limparFormulario();
            ui.renderizaPensamentos();
        } else {
            const pensamentoSalvo = await api.salvarPensamento({ conteudo: conteudoNovoPensamento, autoria: autoriaNovoPensamento });
        }
        ui.criarPensamento(pensamentoSalvo);
    }
    catch (error) {
        console.error('Erro ao salvar pensamento:', error);
    }
}
