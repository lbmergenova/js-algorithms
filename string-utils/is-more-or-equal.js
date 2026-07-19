import { len } from"./len.js";
import { isLess } from "./is-less.js";

/**
 * Проверяет, больше ли первая строка второй или равна ей в лексикографическом порядке.
 *
 * @param {string} firstStr - Первая строка для сравнения.
 * @param {string} secondStr - Вторая строка для сравнения.
 * @returns {boolean} - `true`, если первая строка больше или равна второй, иначе `false`.
 * @throws {TypeError} - Если первый или второй аргумент не является строкой.
 *
 * @example
 *   isMoreOrEqual('abd', 'abc');   // true
 *   isMoreOrEqual('abc', 'abc');   // true
 *   isMoreOrEqual('abc', 'abd');   // false
 */
export function isMoreOrEqual(firstStr, secondStr) {
    return !isLess(firstStr, secondStr);
}