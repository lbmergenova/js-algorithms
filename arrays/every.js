import { len } from "./len.js";

/**
 * Проверяет, удовлетворяют ли все элементы условию. Прекращает проверку при первом false.
 * Исходный массив не изменяется.
 *
 * @param {Array} arr - Массив для проверки.
 * @param {Function} callback - Функция-предикат, возвращает true/false.
 * @returns {Boolean} - true если все элементы удовлетворяют условию, иначе false.
 * @throws {TypeError} - Если первый аргумент не является массивом или второй не является функцией.
 *
 */
export function every(arr, callback) {
    if (!Array.isArray(arr))
        throw new TypeError("Первый аргумент должен быть массивом");
    if (typeof callback !== 'function')
        throw new TypeError("Второй аргумент должен быть функцией");

    const lenArr = len(arr);
    for (let i = 0; i < lenArr; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}
