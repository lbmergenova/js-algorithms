import { len } from "./len.js";
import { isMore } from "./is-more.js";

/**
 * Проверяет, меньше ли первая строка второй или равна ей.
 *
 * @param {string} firstStr - Первая строка для сравнения.
 * @param {string} secondStr - Вторая строка для сравнения.
 * @returns {boolean} - `true`, если первая строка меньше или равна второй, иначе `false`.
 * @throws {TypeError} - Если первый или второй аргумент не является строкой.
 *
 * @example
 *   isLessOrEqual('abc', 'abd');   // true
 *   isLessOrEqual('abc', 'abc');   // true
 *   isLessOrEqual('abd', 'abc');   // false
 */
export function isLessOrEqual(firstStr, secondStr) {
    return !isMore(firstStr, secondStr);
}