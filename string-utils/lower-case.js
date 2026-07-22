import { len } from "./len.js";

/**
 * Преобразует все заглавные буквы в строчные.
 *
 * @param {string} str - Исходная строка.
 * @returns {string} - Новая строка, в которой все прописныезаглавные буквы преобразованы в строчные.
 * @throws {TypeError} - Если аргумент не является строкой.
 *
 * @example
 *   lowerCase('HELLO');      // 'hello'
 *   lowerCase('ПРИВЕТ');     // 'привет'
 *   lowerCase('Hello 123!'); // 'hello 123!'
 */
export function lowerCase(str) {
    if (typeof str !== 'string')
        throw new TypeError('Аргумент должен быть строкой');
    let result = '';
    const caseOffset = 32;
    for (const char of str) {
        let charCode = char.charCodeAt();
        if ((charCode >= 65 && charCode <= 90) || 
            (charCode >= 1040 && charCode <= 1071))
            charCode += caseOffset;
        result += String.fromCodePoint(charCode);
    }
    return result;
}
