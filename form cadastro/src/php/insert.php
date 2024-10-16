<?php

// Configurações do banco de dados
$servername = "localhost"; // Normalmente 'localhost'
$username = "root"; // Substitua pelo seu usuário do banco
$password = 'P@$$w0rd'; // Substitua pela sua senha do banco
$dbname = "dados_usuarios"; // Nome do banco de dados

// Cria conexão 
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Verifica se o método de requisição é POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados do formulário
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $senha = $_POST['password'];

    // Prepara a inserção
    $stmt = $conn->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $nome, $email, $senha); // 'sss' indica que os parâmetros são strings

    // Executa a inserção
    if ($stmt->execute()) {
        echo "Usuário cadastrado com sucesso."; // Mensagem de sucesso
    } else {
        echo "Erro: " . $stmt->error; // Mensagem de erro
    }

    // Fecha a declaração e a conexão
    $stmt->close();
    $conn->close();
} else {
    echo "Método não suportado."; // Mensagem para métodos não suportados
}
?>