const urlBaseApi = 'http://localhost:3001/pensamentos';

const api = {
    // Função criada para buscar dados da API, utilizando o método GET
    async buscarPensamentos() {
        try {
            const response = await axios.get(urlBaseApi);
            return await response.data;
        }    
        catch (error) {
            alert('Erro ao buscar pensamentos: ' + error.message);
            throw error;
        }      
    },


    // Função criada para enviar dados para a API, utilizando o método POST
    async salvarPensamento(pensamento) {
        try {
            const response = await axios.post(urlBaseApi, pensamento);
            return await response.data;
        }    
        catch (error) {
            alert('Erro ao salvar pensamento: ' + error.message);
            throw error;
        }      
    },

    // Função criada para buscar um pensamento específico da API, utilizando o método GET
    async buscarPensamento(id) {
        try {
            const response = await axios.get(`${urlBaseApi}/${id}`);
            return await response.data;
        }    
        catch (error) {
            alert('Erro ao buscar pensamento: ' + error.message);
            throw error;
        }      
    },


    // Função criada para editar um pensamento específico da API, utilizando o método PUT
    async editarPensamento(pensamento) {
        try {
            const response = await axios.put(`${urlBaseApi}/${pensamento.id}`, pensamento);
            return await response.data;
        }    
        catch (error) {
            alert('Erro ao editar pensamento: ' + error.message);
            throw error;
        }      
    },

    // Função criada para deletar um pensamento específico de API, utilizando o método DELETE
    async deletarPensamento(pensamento) {
        try {
            const response = await axios.delete(`${urlBaseApi}/${pensamento.id}`, pensamento);
        }    
        catch (error) {
            alert('Erro ao deletar pensamento: ' + error.message);
            throw error;
        }      
    }
}

export default api;