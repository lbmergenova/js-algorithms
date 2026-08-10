import { len } from "./len.js";

/**
 * Заполняет массив или его часть указанным значением.
 * 
 * Мутирует исходный массив.
 * 
 * @param {Array} arr - Исходный массив.
 * @param {*} value - Значение для заполнения.
 * @param {number} start - Начальный индекс, по умолчанию 0.
 * @param {number} end - Конечный индекс (не включая), по умолчанию равен длине массива.
 * @returns {Array} - Изменённый исходный массив.
 * @throws {TypeError} - Если arr - не массив или start или end - не числа.
 *
 * @example
 *   fill([1, 2, 3, 4], '*', 1, 3);  // [1, *, *, 4]
 * 
 */
export function fill(arr, value, start = 0, end) {
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

    for (let i = start; i < end; i++) {
        arr[i] = value;
    }    
    return arr;
}
