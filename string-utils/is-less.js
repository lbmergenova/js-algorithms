import { len } from"./len.js";

/**
 * Проверяет, меньше ли первая строка второй в лексикографическом порядке.
 *
 * @param {string} firstStr - Первая строка для сравнения.
 * @param {string} secondStr - Вторая строка для сравнения.
 * @returns {boolean} - `true`, если первая строка меньше второй, иначе `false`.
 * @throws {TypeError} - Если первый или второй аргумент не является строкой.
 *
 * @example
 *   isLess('abc', 'abd');   // true
 *   isLess('abc', 'abc');   // false
 *   isLess('abd', 'abc');   // false
 */
export function isLess(firstStr, secondStr) {
    if (typeof firstStr !== 'string') throw new TypeError('Первый аргумент должен быть строкой');
    if (typeof secondStr !== 'string') throw new TypeError('Второй аргумент должен быть строкой');
    const firstLength = len(firstStr);
    const secondLength = len(secondStr);
    const minLength = firstLength < secondLength ? firstLength : secondLength;
    for (let i = 0; i < minLength; i++) {
        if (firstStr[i] > secondStr[i]) return false;
        if (firstStr[i] < secondStr[i]) return true;
    }
    return firstLength < secondLength;
}