import { len } from "./len.js";

/**
 * Возвращает строку с символами в обратном порядке.
 *
 * @param {string} str - Строка, которую необходимо перевернуть.
 * @returns {string} - Новая строка с символами в обратном порядке.
 * @throws {TypeError} - Если аргумент не является строкой.
 *
 * @example
 *   reverse('hello');   // 'olleh'
 *   reverse('abc');     // 'cba'
 *   reverse('');        // ''
 */
export function reverse(str) {
    if (typeof str !== 'string') 
        throw new TypeError("Аргумент должен быть строкой");
    let result = '';
    for (let i = len(str) - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}