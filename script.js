document.addEventListener('DOMContentLoaded', function (){

    const form = document.getElementById('formLogin');

    form.addEventListener('submit', function (event){
        event.preventDefault();

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    // Validade do Campo Nome
    if (nome === '') {
        alert('Por favor, preencha o campo Nome.');
        return;
    }

    // Validade do Campo Telefone
    // Remove caracteres não númericos para contar os dígitos
    const numerosTelefone = telefone.replace(/\D/g, '');
    if (numerosTelefone.length < 10 || numerosTelefone.length > 11) {
        alert('Por favor, insira um número de telefone válido (10 a 11 dígitos).');
        return false;
    }

    // Criacao do objeto com os dados
    const dadosFormulario = {
        nome: nome,
        telefone: numerosTelefone
    };

    // Conversao para JSON, converte uma string para formato JSON
    const jsonString = JSON.stringify(dadosFormulario, null, 2);
    console.log('JSON gerado: ', jsonString);

    // ** NOVO: Integração com a API em FastAPI **
        const apiUrl = 'http://localhost:8000/login'; // Substitua pela URL correta da sua API

        fetch(apiUrl, {
            method: 'POST', // Método que o FastAPI irá esperar
            headers: {
                'Content-Type': 'application/json', // Informa ao servidor que o corpo é JSON
            },
            body: jsonString // Os dados em formato JSON
        })
        .then(response => {
            // Verifica se a resposta foi bem-sucedida (status 200-299)
            if (!response.ok) {
                // Se a resposta for um erro (ex: 401 Unauthorized), lança um erro
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            // Tenta analisar a resposta como JSON
            return response.json();
        })
        .then(data => {
            // Lida com a resposta de sucesso da API
            console.log('Sucesso na API:', data);
            alert(`Login bem-sucedido! Mensagem: ${data.message}`);
            // Aqui você faria o redirecionamento ou outras ações
        })
        .catch((error) => {
            // Lida com erros de rede ou erros lançados acima
            console.error('Erro ao enviar dados para a API:', error);
            alert('Erro ao tentar fazer login. Verifique o console para mais detalhes.');
        });
        // ** FIM DA NOVO **

    });
});