/**
 * Valida um número de cartão de crédito usando o Luhn Algorithm
 * e identifica a bandeira do cartão.
 *
 * @param {string | number} cardNumber - O número do cartão de crédito a ser validado.
 * @returns {object} - Um objeto contendo:
 *   - `isValid` (boolean): Indica se o número do cartão é válido.
 *   - `brand` (string): A bandeira do cartão (ex.: "Visa", "MasterCard", "American Express", etc.).
 *
 * @example
 * // Exemplo de uso:
 * console.log(validateCreditCard(4111111111111111));
 * // Saída: { isValid: true, brand: 'Visa' }
 *
 * console.log(validateCreditCard(5105105105105100));
 * // Saída: { isValid: true, brand: 'MasterCard' }
 *
 * console.log(validateCreditCard(1234567890123456));
 * // Saída: { isValid: false, brand: 'Unknown' }
 */
export function validateCreditCard(cardNumber) {
    cardNumber = cardNumber.toString().replace(/\s+/g, '');
    const cardNumberStr = cardNumber.toString();

    /**
     * Valida o número do cartão usando o Luhn Algorithm.
     *
     * @param {string} cardNumber - O número do cartão de crédito.
     * @returns {boolean} - Retorna `true` se o número do cartão for válido, caso contrário, `false`.
     */
    function isValidLuhn(cardNumber) {
        let sum = 0;
        let shouldDouble = false;

        // Itera pelos dígitos do cartão de trás para frente
        for (let i = cardNumberStr.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumberStr[i], 10);

            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }

            sum += digit;
            shouldDouble = !shouldDouble;
        }

        return sum % 10 === 0;
    }

    /**
     * Identifica a bandeira do cartão de crédito com base no número.
     *
     * @param {string} cardNumber - O número do cartão de crédito.
     * @returns {string} - A bandeira do cartão (ex.: "Visa", "MasterCard", "American Express", etc.).
     *                     Retorna "Unknown" se a bandeira não for identificada.
     */

    const cardBrands = {
        Visa: /^4(?:\d{11}|\d{15})$/,
        MasterCard: /^5[1-5]|^2(2[2-9]|[3-6][0-9]|7[01]|720)/,
        "American Express": /^3[47]/,
        Discover: /^6011|^65|^64[4-9]/,
        Hipercard: /^6062/,
    };

    function getCreditCardBrand(cardNumber) {
        for (const [brand, pattern] of Object.entries(cardBrands)) {
            if (pattern.test(cardNumber)) {
                return brand;
            }
        }
        return "Unknown";
    }

    // Validação do cartão
    const isValid = isValidLuhn(cardNumberStr);
    const brand = getCreditCardBrand(cardNumberStr);

    return {
        isValid,
        brand,
    };
}


