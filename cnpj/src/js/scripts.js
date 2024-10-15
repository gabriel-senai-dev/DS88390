// Função que será chamad ao clicar no botão
function consultarCNPJ() {
    // Obtém o valor do campo CNPJ
    const cnpj = document.getElementById('cnpj').value;

    // Verifica se o CNPJ tem 8 dígitos
    if (cnpj.length !== 14) {
        alert("Por favor, insira um CNPJ válido com 14 dígitos.");
        return; // Interrompe a execução da função se o CPNJ for inválido
    }

    // URL da API de CPNJ (usando a serviço BrasilAPI como exemplo)
    const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;
    
    // Faz uma requisição à API para obter os dados do CNPJ
    fetch(url)
        .then(response => response.json()) // Converte a resposta em JSON
        .then(data => {
            // Verifica se o CNPJ foi encontrado
            if(data.erro) {
                alert("CNPJ não encontrado.");
                return; // Interrompe a execução se o CNPJ não for válido
            }

            // Atualiza os campos no formulário com os dados retornados pela API
            document.getElementById('nome').textContent = data.razao_social;
            document.getElementById('rua').textContent = data.logradouro;
            document.getElementById('numero').textContent = data.numero;
            document.getElementById('complemento').textContent = data.complemento;
            document.getElementById('bairro').textContent = data.bairro;
            document.getElementById('municipio').textContent = data.municipio;
            document.getElementById('uf').textContent = data.uf;
            document.getElementById('cep').textContent = data.cep;
            document.getElementById('telefone').textContent = data.ddd_telefone_1;
        })
        .catch(error => {
            console.error("Erro ao consultar o CNPJ:", error); // Loga os erros no console
            alert("Ocorreu um erro ao consultar o CNPJ.");
        });
}