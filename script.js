document.addEventListener('DOMContentLoaded', () => {
    const botoesNav = document.querySelectorAll('.btn-nav');
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';

    botoesNav.forEach(botao => {
        const href = botao.getAttribute('href');
        if (href === paginaAtual) {
            botao.classList.add('ativo');
        } else {
            botao.classList.remove('ativo');
        }
    });
});