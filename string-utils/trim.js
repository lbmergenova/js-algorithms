import { len } from "./len.js";
import { slice } from "./slice.js";

/**
 * Удаляет пробелы с начала и конца строки.
 *
 * @param {string} str - Исходная строка .
 * @returns {string} - Строка без пробелов в начале и конце.
 * @throws {TypeError} - Если аргумент не является строкой.
 *
 * @example
 *   trim('  hello  ');   // 'hello'
 *   trim('hello');       // 'hello'
 *   trim('   ');         // ''
 */
export function trim(str) {
    if (typeof str !== 'string')
        throw new TypeError('Аргумент должен быть строкой');
    let start = 0;
    let end = len(str) - 1;

    while (str[start] === ' ') {
        start++;
    }

    if (end === start) 
        return '';
    
    while (str[end] === ' ') {
        end--;
    }
    return slice(str, start, ++end);
}


