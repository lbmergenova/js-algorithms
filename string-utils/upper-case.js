import { len } from "./len.js";

/**
 * Преобразует строчные буквы в заглавные.
 *
 * @param {string} str - Исходная строка.
 * @returns {string} - Новая строка, в которой все строчные буквы преобразованы в заглавные.
 * @throws {TypeError} - Если аргумент не является строкой.
 *
 * @example
 *   upperCase('hello');      // 'HELLO'
 *   upperCase('Привет');     // 'ПРИВЕТ'
 *   upperCase('Hello 123!'); // 'HELLO 123!'
 */
export function upperCase(str) {
    if (typeof str !== 'string')
        throw new TypeError('Аргумент должен быть строкой');
    
    let result = '';
    const caseOffset = 32;
    for (const char of str) {
        let charCode = char.charCodeAt();
        if ((charCode >= 97 && charCode <= 122) || 
            (charCode >= 1072 && charCode <= 1103))
            charCode -= caseOffset;
        result += String.fromCodePoint(charCode);
    }
    return result;
}
