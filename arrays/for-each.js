import { len } from "./len.js";

/**
 * Вызывает callback для каждого элемента массива.
 * Не изменяет исходный массив.
 *
 * @param {Array} arr - Массив для перебора.
 * @param {Function} search - Функция, которая применяется для каждого элемента.
 * @returns {undefined} 
 * @throws {TypeError} - Если первый аргумент не является массивом или второй не является функцией.
 *
 */
export function forEach(arr, callback)  {
    if (!Array.isArray(arr))
        throw new TypeError("Первый аргумент должен быть массивом");
    if (typeof callback !== 'function')
        throw new TypeError("Второй аргумент должен быть функцией");

    const lenArr = len(arr);
    for (let i = 0; i < lenArr; i++) {
        callback(arr[i], i, arr);
    }
    return undefined;
}
