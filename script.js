/*
function formatarTelefone(telefone) {
    const numeros = telefone.replace(/\D/g, '');
    
    const numerosLimitados = numeros.slice(0, 11);
    
        if (numerosLimitados.length <= 10) {
            return numerosLimitados
            .replace(/(\d{2}))/, '($1) ')
            .replace(/(\d{4})(\d{4})/, '$1-$2')
        } else {
            return numerosLimitados
            .replace(/(\d{2})/, '($1) ')
            .replace(/(\d{5})(\d{4})/, '$1-$2');
    }
}

document.getElementById('telefone').addEventListener('input', function(e) {
    const input = e.target;
    const valorFormatado = formatarTelefone(input.value);
    input.value = valorFormatado;
});

*/

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
    if (numerosTelefone.length < 10 || numerosTelefone > 11) {
        alert('Por favor, insira um número de telefone válido (10 a 11 dígitos).');
        return false;
    }

    // Se passou pelas validações, pode enviar o formulário
    alert('Login realizado com sucesso!\nNome: ' + nome + '\nTelefone: ' + telefone);
    this.submit();

});