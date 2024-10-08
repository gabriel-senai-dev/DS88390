// Quando o documento HTML for completamente carregado, executa a função anônima
ducument.addEventListener('DOMContentLoaded', function() {
    // Carrega os itens do estoque quando a página é carregada
    loadItems();

    // Adiciona um ouvinte de evento para o formulário de adicionar item
    // Quando o formulário for enviado, executa a função para adicionar o item
    document.getElementById('add-form').addEventListener('submit', function (event) {

        // Previne o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();

        // Chama a função para adicionar um item ao estoque
        addItem();
    });
});

// Função para carregar os itens do estoque do servidor
function loadItem() {
    // Faz uma requisição GET ao servidor para obter a lista de itens
    fetch('server.php?action=get_items')
        // Converte a resposta recebida em formato JSON
        .then(response => response.json())
        // Executa esta função quando os dados são carregados com sucesso
        .then(data => {
            // Obtém o elemento HTML que contém a lista de itens
            const itemList = document.getElementById('item-list');
            // Limpa qualquer conteúdo anteriro na lista de itens
            itemList.innerHTML = '';
            // Itera sobre cada item recebido do servidor
            data.forEach(item => {
                // Cria um novo elemento de lista (<li>) para cada item
                const li = document.createElement('li');
                // Define o conteúdo de texto do item com o nome, quantidade e preço
                li.textContent = '${item.nome} - Quantidade: ${item.quantidade} - Preço: R$ $(item.preço)';
                // Adiciona o item criado à lista no HTML
                itemList.appendChild(li);
            });
        });
}

// Função para adicionar um item ao estoque
function addItem() {
    // Obtém o valor do compo de nome do item
    const nome = document.getElementById('nome').value;
    //  Obtém o valor do campo de quantidade do item
    const quantidade = document.getElementById('quantidade').value;
    // Obtém o valor do campo de preço do item
    const preco = document.getElementById('preco').value;

    // Faz uma requisição POST ao servidor para adicionar o novo item
    fetch('server.php?action=add_item', {
        // Define o método HTP como POST
        method: 'POST',

        // Define o tipo de conteúdo como JSON
        header: {
            'Content-Type': 'aplication/json',
        },
        // Converte os dados do item em uma string JSON e os envia no corpo da requisição
        body: JSON.stringify ({nome, quantidade, preco}),
    })
    // Converte a resposta do servidor em formato JSON
    .then(response => response.json())
    // Executa esta função após receber a resposta do servidor
    .then(data => {
        // Verifica se o item foi adicionado com sucesso
        if (data.success) {
            // Se sim, recarrega a lista de itens para mostrar o novo item
            loadItems();
            // Reseta o formulário apra limpar os campos
            document.getElementById('add-form').reset();
        } else {
            // Se não, exibe uma mensagem de erro ao usuário
            alert('Erro ao adicionar item.');
        }
    });
}