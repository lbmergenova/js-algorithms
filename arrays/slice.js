import { len } from "./len.js";

/**
 * Копирует часть массива, поддерживает отрицательные индексы.
 * 
 * @param {Array} arr - Исходный массив (не меняется).
 * @param {number} start - Начальный индекс, по умолчанию 0.
 * @param {number} end - Конечный индекс (не включая), по умолчанию равен длине массива.
 * @returns {Array} - Новый массив из копированных элементов.
 * @throws {TypeError} - Если arr - не массив или start или end - не числа.
 *
 * @example
 *   slice([1, 2, 3, 4, 5], 1, 3);  // [2, 3]
 *   slice([1, 2, 3, 4, 5], -2);    // [4, 5]
 * 
 */
export function slice(arr, start = 0, end) {
    if (!Array.isArray(arr))
        throw new TypeError('Первый аргумент должен быть массивом');
    const lenArr = len(arr);
    if (end === undefined)
        end = lenArr;
    if (typeof start !== 'number' || typeof end !== 'number')
        throw new TypeError('Аргументы start и end должы быть числами');

    if (Number.isNaN(start)) {
        start = 0;
    } else if (start < 0) {
        start += lenArr;
        if (start < 0)
            start = 0;
    }

    if (Number.isNaN(end)) {
        end = 0;
    } else if (end < 0) {
        end += lenArr;
        if (end < 0)
            end = 0;
    } else if (end > lenArr) {
        end = lenArr;
    }

    const result = [];
    for (let i = start; i < end; i++) {
        result[i - start] = arr[i];
    }    
    return result;
}
