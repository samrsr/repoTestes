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
        telefone: telefone
    };

    // Conversao para JSON, converte uma string para formato JSON
    const jsonString = JSON.stringify(dadosFormulario, null, 2);
    console.log('JSON gerado: ', jsonString);

    });
});