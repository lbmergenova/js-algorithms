import { len } from "./len.js";

/**
 * Создаёт новый массив из результатов вызова callback для каждого элемента.
 * Исходный массив не изменяется.
 *
 * @param {Array} arr - Массив для трансформации.
 * @param {Function} callback - Функция, которая применяется для каждого элемента.
 * @returns {Array} - Новый измененный массив.
 * @throws {TypeError} - Если первый аргумент не является массивом или второй не является функцией.
 *
 */
export function map(arr, callback) {
    if (!Array.isArray(arr))
        throw new TypeError("Первый аргумент должен быть массивом");
    if (typeof callback !== 'function')
        throw new TypeError("Второй аргумент должен быть функцией");

    const lenArr = len(arr);
    const result = [];
    for (let i = 0; i < lenArr; i++) {
        result[i] = callback(arr[i], i, arr);
    }
    return result;
}
