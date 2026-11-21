document.addEventListener('DOMContentLoaded', () => {
    const botoesFiltro = document.querySelectorAll('.btn-filtro');
    const cards = document.querySelectorAll('.card-inseto');

    function filtrarCards(categoriaSelecionada) {
        cards.forEach(card => {
            const categoriaCard = card.getAttribute('data-categoria');
            const correspondeCategoria = (categoriaSelecionada === 'todos' || categoriaCard === categoriaSelecionada);

            card.style.display = correspondeCategoria ? '' : 'none';
        });
    }

    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            botoesFiltro.forEach(b => b.classList.remove('ativo'));
            botao.classList.add('ativo');

            const categoriaSelecionada = botao.getAttribute('data-categoria');
            filtrarCards(categoriaSelecionada);
        });
    });
});