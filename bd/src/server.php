<?php
$servername = "localhost";
$username = "root";
$password = "P4$$w0rd";
$dbname = "produtos";

// Cria a conexão
$conn = new mysql($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Verifica ação e executa conforme necessário
$action = $_GET['action'];


?>