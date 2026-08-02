import { len } from "./len.js";

/**
 * Возвращает часть строки между двумя индексами, не включая конечный, с поддержкой отрицательных индексов.
 *
 * @param {string} str - Исходная строка.
 * @param {number} start - Начальный индекс (включая). Если отрицательный — отсчёт с конца.
 * @param {number} end - Конечный индекс (не включая). По умолчанию равен длине строки. Если не передан — до конца строки. Если отрицательный — отсчёт с конца.
 * @returns {string} - Новая строка, содержащая символы между индексами `start` и `end`.
 * @throws {TypeError} - Если аргументы имеют неверный тип.
 *
 * @example
 *   slice('hello', 1, 4);    // 'ell'
 *   slice('hello', -2);      // 'lo'
 *   slice('hello', 1, -1);   // 'ell'
 */
export function slice(str, start, end) {
    if (typeof str !== 'string')
        throw new TypeError("Первый аргумент должен быть строкой");

    const strLen = len(str);
    if (end === undefined) 
        end = strLen;
    if (typeof start !== 'number' || typeof end !== 'number')
        throw new TypeError("Второй и третий аргументы должны быть числами");
    
    if (Number.isNaN(start)) {
        start = 0;
    } else if (start < 0) {
        start += strLen;
        if (start < 0) start = 0;
    }

    if (Number.isNaN(end)) {
        end = 0;
    } else if (end < 0) {
        end += strLen;
        if (end < 0) end = 0;
    } else if (end > strLen) end = strLen;

    let result = '';
    for (let i = start; i < end; i++) {
        result += str[i];        
    }
    return result;
}
