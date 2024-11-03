<?php

// Conexão com o banco de dados MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "techstore";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Obtém os valores enviados pelo formulário
$nome = $_POST["name"];
$email = $_POST["email"];
$detalhes = $_POST["details"];

// Prepara a instrução SQL para inserir os dados
$sql = "INSERT INTO solicitacoes (name, email, details) VALUES ('$nome', '$email', '$detalhes')";

// Executa a inserção e verifica se deu certo
if ($conn->query($sql) === TRUE) {
    echo "Dados inseridos com sucesso!";
} else {
    echo "Erro ao inserir os dados: " . $conn->error;
}

// Fecha a conexão
$conn->close();

?>