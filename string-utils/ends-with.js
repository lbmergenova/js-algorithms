import { len } from "./len.js";

/**
 * Проверяет, заканчивается ли строка указанной подстрокой.
 *
 * @param {string} str - Строка, в которой выполняется поиск.
 * @param {string} search - Подстрока, которая должна находиться в конце строки.
 * @returns {boolean} - `true`, если строка заканчивается указанной подстрокой, иначе `false`.
 * @throws {TypeError} - Если хотя бы один из аргументов не является строкой.
 *
 * @example
 *   endsWith('hello', 'lo');     // true
 *   endsWith('hello', 'he');     // false
 *   endsWith('hello', '');       // true
 */
export function endsWith(str, search)  {
    if (typeof str !== 'string' || typeof search !== 'string') 
        throw new TypeError("Аргументы должны быть строками");
    const strLen = len(str);
    const searchLen = len(search);
    if (searchLen > strLen) return false;
    let strIndex = strLen - 1;
    for (let searchIndex = searchLen-1; searchIndex >= 0; searchIndex--, strIndex--) {
        if (str[strIndex] !== search[searchIndex]) return false;
    }
    return true;
}