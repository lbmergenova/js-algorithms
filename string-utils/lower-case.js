import { len } from "./len.js";
import {
    EN_UPPER_A,
    EN_UPPER_Z,
    RU_UPPER_A,
    RU_UPPER_YA,
    RU_UPPER_YO,
    CASE_OFFSET,
    YO_CASE_OFFSET,
} from './constants.js';
import { RU_LOWER_YA } from "./constants.js";

/**
 * Преобразует все заглавные буквы в строчные.
 *
 * @param {string} str - Исходная строка.
 * @returns {string} - Новая строка, в которой все прописные заглавные буквы преобразованы в строчные.
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
    for (const char of str) {
        let charCode = char.charCodeAt();
        if ((charCode >= EN_UPPER_A && charCode <= EN_UPPER_Z) || 
            (charCode >= RU_UPPER_A && charCode <= RU_UPPER_YA)) {
                charCode += CASE_OFFSET;
        } else if (charCode === RU_UPPER_YO) {
            charCode += YO_CASE_OFFSET;
        }
        result += String.fromCodePoint(charCode);
    }
    return result;
}
