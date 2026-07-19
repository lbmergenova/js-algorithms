import { len } from "./len.js";

/**
 * Повторяет строку указанное количество раз.
 *
 * @param {string} str - Строка, которую необходимо повторить.
 * @param {number} [count=0] - Количество повторений.
 * @returns {string} - Новая строка, состоящая из повторений исходной строки.
 * @throws {TypeError} - Если первый аргумент не является строкой или второй аргумент не является числом.
 * @throws {RangeError} - Если количество повторений отрицательное или равно `Infinity`.
 *
 * @example
 *   repeat('ab', 3);   // 'ababab'
 *   repeat('ab');      // ''
 *   repeat('ab', 2.7); // 'abab'
 */
export function repeat(str, count = 0) {
    if (typeof str !== 'string')
        throw new TypeError("Первый аргумент должен быть строкой");
    if (typeof count !== 'number') 
        throw new TypeError("Второй аргумент должен быть числом");
    if (count < 0 || count === Infinity) 
        throw new RangeError("Второй аргумент должен быть положительным"); 
    count = count - count % 1;
    let result = '';
    for (let i = 0; i < count; i++) {
        result += str;
    }
    return result;
}