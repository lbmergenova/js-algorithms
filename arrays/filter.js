import { len } from "./len.js";
import { push } from "./push.js"

/**
 * Создает новый массив из элементов, для которых callback вернул true.
 * Исходный массив не изменяется.
 * 
 * @param {Array} arr - Массив для фильтрации.
 * @param {Function} callback - функция-предикат, возвращает true/false для каждого элемента.
 * @returns {Array} - Новый массив.
 * @throws {TypeError} - Если первый аргумент не является массивом или второй не является функцией.
 *
 * @example
 *
 */
export function filter(arr, callback) {
    if (!Array.isArray(arr))
        throw new TypeError("Первый аргумент должен быть массивом");
    if (typeof callback !== 'function')
        throw new TypeError("Второй аргумент должен быть функцией");

    const lenArr = len(arr);
    const result = [];
    for (let i = 0; i < lenArr; i++) {
        if (callback(arr[i], i, arr)) {
            push(result, arr[i]);
        }
    }
    return result;
}
