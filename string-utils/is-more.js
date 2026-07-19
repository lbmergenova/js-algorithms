import { len } from"./len.js";

/**
 * Проверяет, больше ли первая строка второй в лексикографическом порядке.
 *
 * @param {string} firstStr - Первая строка для сравнения.
 * @param {string} secondStr - Вторая строка для сравнения.
 * @returns {boolean} - `true`, если первая строка больше второй, иначе `false`.
 * @throws {TypeError} - Если первый или второй аргумент не является строкой.
 *
 * @example
 *   isMore('abd', 'abc');   // true
 *   isMore('abc', 'abc');   // false
 *   isMore('abc', 'abd');   // false
 */
export function isMore(firstStr, secondStr) {
    if (typeof firstStr !== 'string') 
        throw new TypeError('Первый аргумент должен быть строкой');
    if (typeof secondStr !== 'string') 
        throw new TypeError('Второй аргумент должен быть строкой');
    const firstLength = len(firstStr);
    const secondLength = len(secondStr);
    const minLength = firstLength < secondLength ? firstLength : secondLength;
    for (let i = 0; i < minLength; i++) {
        if (firstStr[i] > secondStr[i]) return true;
        if (firstStr[i] < secondStr[i]) return false;
    }
    return firstLength > secondLength;
}