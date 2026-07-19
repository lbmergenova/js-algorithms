import { len } from "./len.js";
import { indexOf } from "./index-of.js";

/**
 * Проверяет, содержит ли строка указанную подстроку.
 *
 * @param {string} str - Строка, в которой выполняется поиск.
 * @param {string} search - Подстрока, которую необходимо найти.
 * @returns {boolean} - `true`, если подстрока найдена, иначе `false`.
 * @throws {TypeError} - Если хотя бы один из аргументов не является строкой.
 *
 * @example
 *   includes('hello', 'ell');   // true
 *   includes('hello', 'abc');   // false
 *   includes('hello', '');      // true
 */
export function includes(str, search) {
    return indexOf(str, search) !== -1;
}