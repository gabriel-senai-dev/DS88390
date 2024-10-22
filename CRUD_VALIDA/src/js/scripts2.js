document.querySelector('form').addEventListener('submit', function(event) {
    // Seleciona os campos do formulário

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;


    // Verifica se os campos estão vazios
    if (nome === '' || telefone === '' || email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.'); // Exibe uma mensagem de erro
        event.preventDefault(); // Cancela o envio do formulário
    } else {
        FormData.reset();
    }    
});