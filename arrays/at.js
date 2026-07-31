import { len } from "./len.js";

/**
 * Возвращает элемент массива по индексу, поддерживает отрицательные индексы.
 *
 * @param {Array} arr - Массив.
 * @param {number} index - Индекс элемента.
 * @returns {*} - Элемент массива или undefined, если индекс вне диапазона.
 * @throws {TypeError} - Если первый аргумент не является массивом или второй аргумент - числом.
 *
 * @example
 *   at([10, 20, 30], 1)        // 20
 *   at([10, 20 , 30], -1)      // 30
 */
export function at(arr, index = 0) {
    if (!Array.isArray(arr)) 
        throw new TypeError("Первый аргумент должен быть массивом");
    if (typeof index !== 'number')
        throw new TypeError("Второй аргумент должен быть числом");

    if (Number.isNaN(index)) {
        index = 0;
    } else if (index % 1 !== 0) {
        index = index - index % 1;
    }
    if (index < 0) {
        index += len(arr);
    }
    return arr[index];
}
