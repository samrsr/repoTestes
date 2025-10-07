document.getElementById('formLogin').addEventListener('submit', function (event){
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

    // Se passou pelas validações, pode enviar o formulário
    alert('Login realizado com sucesso!\nNome: ' + nome + '\nTelefone: ' + telefone);
    this.submit();

});