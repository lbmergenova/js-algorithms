import { len } from "./len.js";
import { indexOf } from "./index-of.js"
import { slice } from "./slice.js";

/**
 * Заменяет первое вхождение подстроки другой подстрокой.
 *
 * @param {string} str - Исходная строка.
 * @param {string} search - Подстрока, которую необходимо заменить.
 * @param {string} replacement - Подстрока, на которую выполняется замена.
 * @returns {string} - Новая строка с замененным первым вхождением подстроки. Если подстрока не найдена, возвращается исходная строка.
 * @throws {TypeError} - Если хотя бы один из аргументов не является строкой.
 *
 * @example
 *   replace('hello world', 'world', 'JS');   // 'hello JS'
 *   replace('banana', 'na', 'NA');           // 'baNAna'
 *   replace('hello', 'abc', 'JS');           // 'hello'
 */
export function replace(str, search, replacement) {
    if (typeof str !== 'string' || 
        typeof search !== 'string' || 
        typeof replacement !== 'string') {
            throw new TypeError('Аргументы должны быть строками');
        }
    const indexOfSearch = indexOf(str, search);
    if (indexOfSearch === -1)
        return str;
    let result = slice(str,0,indexOfSearch);
    result += replacement;
    result += slice(str,indexOfSearch+len(search))
    return result;
}
