import { len } from "./len.js";

/**
 * Проверяет, удовлетворяет ли хотя бы один элемент условию.
 * Исходный массив не изменяется.
 *
 * @param {Array} arr - Массив для проверки.
 * @param {Function} callback - Функция-предикат, возвращает true/false.
 * @returns {Boolean} - true если хотя бы один элемент удовлетворяет условию, иначе false.
 * @throws {TypeError} - Если первый аргумент не является массивом или второй не является функцией.
 *
 */
export function some(arr, callback) {
    if (!Array.isArray(arr))
        throw new TypeError("Первый аргумент должен быть массивом");
    if (typeof callback !== 'function')
        throw new TypeError("Второй аргумент должен быть функцией");

    const lenArr = len(arr);
    for (let i = 0; i < lenArr; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}
