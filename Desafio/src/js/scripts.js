document.querySelector('form').addEventListener('submit', function(event) {
    
    // Seleciona os campos do formulário
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var detalhes = document.getElementById('details').value;

    // Verifica se os campos estão vazios
    if (nome === '' || email === '' || detalhes === '') {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    }
});