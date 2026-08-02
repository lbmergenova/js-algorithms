import { len } from "./len.js";
import {
    EN_LOWER_A,
    EN_LOWER_Z,
    RU_LOWER_A,
    RU_LOWER_YA,
    RU_LOWER_YO,
    CASE_OFFSET,
    YO_CASE_OFFSET,
} from './constants.js';

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
    for (const char of str) {
        let charCode = char.charCodeAt();
        if ((charCode >= EN_LOWER_A && charCode <= EN_LOWER_Z) || 
            (charCode >= RU_LOWER_A && charCode <= RU_LOWER_YA)) {
                charCode -= CASE_OFFSET;
        } else if (charCode === RU_LOWER_YO ) {
            charCode -= YO_CASE_OFFSET;
        }
        result += String.fromCodePoint(charCode);
    }
    return result;
}
