import { validateCreditCard } from '../src/scripts/creditCardValidation.js';

document.getElementById('cardForm').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Formulário enviado!');

    const cardNumber = document.getElementById('cardNumber').value;
    const { isValid, brand } = validateCreditCard(cardNumber);

    const resultElement = document.getElementById('result');
    if (isValid) {
        resultElement.textContent = `Cartão válido! Bandeira detectada: ${brand}`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `Cartão inválido! Bandeira detectada: ${brand}`;
        resultElement.style.color = 'red';
    }
});

console.log('Script carregado com sucesso!');