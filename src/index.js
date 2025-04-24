import { validateCreditCard } from './scripts/creditCardValidation.js';

// Testando a função validateCreditCard com diferentes números de cartão
const testCards = [
    // Cartões válidos e bandeiras identificadas
    { number: 4111111111111111, expected: { isValid: true, brand: 'Visa' } },
    { number: 5105105105105100, expected: { isValid: true, brand: 'MasterCard' } },
    { number: 341111111111111, expected: { isValid: true, brand: 'American Express' } },
    { number: 6011111111111117, expected: { isValid: true, brand: 'Discover' } },

    // cartões inválidos e bandeiras identificadas
    { number: 6062828282828282, expected: { isValid: false, brand: 'Hipercard' } },

    // cartões inválidos e bandeiras não identificadas
    { number: 1234567890123456, expected: { isValid: false, brand: 'Unknown' } }
];

testCards.forEach(card => {
    const result = validateCreditCard(card.number);
    console.log(`Número: ${card.number}`);
    console.log(`Resultado esperado: ${JSON.stringify(card.expected)}`);
    console.log(`Resultado obtido: ${JSON.stringify(result)}`);
    console.log('---');
});

// node src/index.js