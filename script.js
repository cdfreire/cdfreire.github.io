// script.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Pegando valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulação de envio de formulário
    alert(`Obrigado pelo contato, ${name}! Sua mensagem foi enviada.`);

    // Limpa o formulário
    document.getElementById('contactForm').reset();
});
