import { len } from "./len.js";
import { isEqual } from "./is-equal.js"

/**
 * Проверяет, не равны ли две строки. 
 *
 * @param {string} firstStr - Первая строка для сравнения.
 * @param {string} secondStr - Вторая строка для сравнения.
 * @returns {boolean} - `true`, если строки не равны, иначе `false`.
 * @throws {TypeError} - Если первый или второй аргумент не является строкой.
 *
 * @example
 *   isNotEqual('hello', 'world');   // true
 *   isNotEqual('hello', 'hello');   // false
 *   isNotEqual('', '');             // false
 */
export function isNotEqual(firstStr, secondStr) {
    return !isEqual(firstStr, secondStr);
}