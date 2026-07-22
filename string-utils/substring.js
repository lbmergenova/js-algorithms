import { len } from "./len.js";

/**
 * Возвращает часть строки между двумя индексами, не включая конечный.
 *
 * @param {string} str - Исходная строка.
 * @param {number} start - Начальный индекс (включая).
 * @param {number} end - Конечный индекс (не включая). По умолчанию равен длине строки.
 * @returns {string} - Новая строка, содержащая символы между индексами `start` и `end`.
 * @throws {TypeError} - Если аргументы имеют неверный тип.
 *
 * @example
 *   substring('hello', 1, 4);   // 'ell'
 *   substring('hello', 2);      // 'llo'
 *   substring('hello', 4, 1);   // 'ell
 */
export function substring(str, start, end ) {
    if (typeof str !== 'string')
        throw new TypeError("Первый аргумент должен быть строкой");
    const strLen = len(str);
    if (end === undefined) {
        end = strLen;
    }
    if (typeof start !== 'number' || typeof end !== 'number')
        throw new TypeError("Второй и третий аргументы должны быть числами");
    
    start = Number.isNaN(start) ? 0 : start
    end = Number.isNaN(end) ? 0 : end
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }
    start = start < 0 ? 0 : start;
    end = end < 0 ? 0 : end;
    end = (end < strLen) ? end : strLen;
    let result = '';
    for (let i = start; i < end; i++) {
        result += str[i];
    }
    return result;
}
