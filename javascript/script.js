const botoesAdicionar = document.querySelectorAll('.adicionar-carrinho');
const listaCarrinho = document.getElementById('lista-carrinho');
const totalCarrinho = document.getElementById('total-carrinho');
const btnFinalizar = document.getElementById('finalizar-compra');
const btnRemover = document.getElementById('remover-produtos');

let total = 0;

// Adicionar ao carrinho
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', () => {
        const nome = botao.getAttribute('data-nome');
        const preco = parseFloat(botao.getAttribute('data-preco'));

        // Adiciona item no carrinho
        const li = document.createElement('li');
        li.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);

        // Atualiza o total
        total += preco;
        totalCarrinho.textContent = total.toFixed(2);
    });
});

// Finalizar compra
btnFinalizar.addEventListener('click', () => {
    if (total > 0) {
        alert('Compra finalizada com sucesso!');
        listaCarrinho.innerHTML = '';
        total = 0;
        totalCarrinho.textContent = total.toFixed(2);
    } else {
        alert('Seu carrinho está vazio!');
    }
});

// Remover todos os produtos
btnRemover.addEventListener('click', () => {
    listaCarrinho.innerHTML = '';
    total = 0;
    totalCarrinho.textContent = total.toFixed(2);
});
