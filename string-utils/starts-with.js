import { len } from "./len.js";

/**
 * Проверяет, начинается ли строка с указанной подстроки.
 *
 * @param {string} str - Строка, в которой выполняется поиск.
 * @param {string} search - Подстрока, которая должна находиться в начале строки.
 * @returns {boolean} - `true`, если строка начинается с указанной подстроки, иначе `false`.
 * @throws {TypeError} - Если хотя бы один из аргументов не является строкой.
 *
 * @example
 *   startsWith('hello', 'he');   // true
 *   startsWith('hello', 'lo');   // false
 *   startsWith('hello', '');     // true
 */
export function startsWith(str, search) {
    if (typeof str !== 'string' || typeof search !== 'string') 
        throw new TypeError("Аргументы должны быть строками");
    const searchLen = len(search);
    if (searchLen > len(str)) return false;
    for (let i = 0; i < searchLen; i++) {
        if (str[i] !== search[i]) return false;
    }
    return true;
}