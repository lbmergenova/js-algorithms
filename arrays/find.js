import { len } from "./len.js";

/**
 * Поиск первого подходящего элемента
 *
 * @param {Array} arr - Массив для поиска.
 * @param {Function} callback - Функция-предикат, получает (элемент, индекс, массив).
 * @returns {*} -  Первый подходящий элемент или undefined, если элемент не найден.
 * @throws {TypeError} - Если первый аргумент не является массивом или второй не является функцией.
 *
 * @example
 *   find([10, 20, 30], (item) => item > 15) // 20
 * 
 */
export function find(arr, callback) {
    if (!Array.isArray(arr))
        throw new TypeError("Первый аргумент должен быть массивом");
    if (typeof callback !== 'function')
        throw new TypeError("Второй аргумент должен быть функцией");

    const lenArr = len(arr);
    for (let i = 0; i < lenArr; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}
