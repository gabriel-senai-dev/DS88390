// Função para validar o formulário
function validateForm() {

    // Obtém os valores dos campos de input pelo ID
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Obtém o elemento para exibir mensagens de erro
    let errorMenssage = document.getElementById('error-message');

    // Limpar qualquer mensagem de erro anterior
    errorMenssage.textContent = '';

    // Verifica se o campo 'Nome' está vazio
    if (name === '') {
        // Exibe uma mensagem de erro e interrompe o envio do formulário
        errorMenssage.textContent = 'Por favor, insira seu nome';
        return false;
    }

    // Verifica se o campo 'E-mail' está vazio
    if (email === '') {
        // Exibe uma mensagem de erro e interrompe o envio do formulário
        errorMenssage.textContent = 'Por favor, insira seu e-mail';
        return false;
    }

    // Verifica se o campo 'Senha' está vazio
    if (password === '') {
        // Exibe uma mensagem de erro e interrompe o envio do formulário
        errorMenssage.textContent = 'Por favor, insira sua senha';
        return false;
    }

    // Verifica se o campo 'Confirme Senha' está vazio
    if (password !== confirmPassword) {
        // Exibe uma mensagem de erro e interrompe o envio do formulário
        errorMenssage.textContent = 'As senhas não correspondem';
        return false;
    }

    //Se todas as verificações forem bem-sucedidas, o formulário pode ser enviado
    return true; //Permite o envio do formulário
}