const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('http://localhost:3001/pensamentos');
            const data = await response.json();
            return data;
        }    
        catch (error) {
            alert('Erro ao buscar pensamentos: ' + error.message);
            throw error;
        }      
    }
}

export default api;