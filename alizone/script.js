// Código JavaScript opcional para funcionalidades adicionais
document.querySelectorAll('.product-item img').forEach(img => {
    img.addEventListener('click', () => {
        alert('Imagem do produto clicada!');
    });
});
