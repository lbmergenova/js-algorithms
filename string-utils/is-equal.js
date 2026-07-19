import { len } from"./len.js";

/**
 * Проверяет, равны ли две строки.
 *
 * @param {string} firstStr - Первая строка для сравнения.
 * @param {string} secondStr - Вторая строка для сравнения.
 * @returns {boolean} - `true`, если строки одинаковы, иначе `false`.
 * @throws {TypeError} - Если первый или второй аргумент не является строкой.
 *
 * @example
 *   isEqual('hello', 'hello');   // true
 *   isEqual('hello', 'world');   // false
 *   isEqual('', '');             // true
 */
export function isEqual(firstStr, secondStr) {
    if (typeof firstStr !== 'string') throw new TypeError('Первый аргумент должен быть строкой');
    if (typeof secondStr !== 'string') throw new TypeError('Второй аргумент должен быть строкой');
    const length = len(firstStr);
    if ( length !== len(secondStr)) return false;
    for (let i = 0; i < length; i++) {
        if (firstStr[i] !== secondStr[i]) return false;
    }
    return true
}