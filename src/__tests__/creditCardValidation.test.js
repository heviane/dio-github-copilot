import { validateCreditCard } from '../scripts/creditCardValidation.js';

describe('validateCreditCard', () => {

    // ================== Número do cartão válido e bandeira identificada ==================
    test('deve validar um cartão Visa válido', () => {
        const result = validateCreditCard(4111111111111111);
        expect(result).toEqual({ isValid: true, brand: 'Visa' });
    });

    test('deve validar um cartão MasterCard válido', () => {
        const result = validateCreditCard(5105105105105100);
        expect(result).toEqual({ isValid: true, brand: 'MasterCard' });
    });

    test('deve validar um cartão MasterCard válido com prefixo 2221', () => {
        const result = validateCreditCard(2221000000000009);
        expect(result).toEqual({ isValid: true, brand: 'MasterCard' });
    });

    test('deve validar um cartão American Express válido', () => {
        const result = validateCreditCard(341111111111111);
        expect(result).toEqual({ isValid: true, brand: 'American Express' });
    });

    test('deve validar um cartão Discover válido', () => {
        const result = validateCreditCard(6011111111111117);
        expect(result).toEqual({ isValid: true, brand: 'Discover' });
    });

    // ================== Número do cartão inválido e bandeira identificada ==================
    test('deve identificar um cartão Hipercard inválido', () => {
        const result = validateCreditCard(6062828282828282);
        expect(result).toEqual({ isValid: false, brand: 'Hipercard' });
    });

    test('deve validar um cartão MasterCard inválido com prefixo 2720', () => {
        const result = validateCreditCard(2720999999999999);
        expect(result).toEqual({ isValid: false, brand: 'MasterCard' });
    });

    // ================== Número do cartão inválido e bandeira não identificada ==================
    test('deve retornar "Unknown" para um número de cartão inválido', () => {
        const result = validateCreditCard(1234567890123456);
        expect(result).toEqual({ isValid: false, brand: 'Unknown' });
    });
});