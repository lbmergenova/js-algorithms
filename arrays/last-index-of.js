import { len } from "./len.js";

/**
 * Возвращает индекс последнего вхождения элемента.
 *
 * @param {Array} arr - Массив для поиска.
 * @param {*} item - Искомый элемент.
 * @returns {number} - Индекс последнего вхождения элемента или `-1`, если элемент не найден.
 * @throws {TypeError} - Если первый аргумент не массив.
 *
 * @example
 *   indexOf([10, 20, 30, 20], 20)      // 3
 *   indexOf(['a', 'b', 'c'], 'a')      // 1
 *   indexOf(['a', 'b', 'c'], 'd')      // -1
 *
 */
export function lastIndexOf(arr, item) {
    if (!Array.isArray(arr))
        throw new TypeError("Первый аргумент должен быть массивом");
    const arrLen = len(arr);
    for (let i = arrLen; i >= 0; i--) {
        if (arr[i] === item) 
            return i
    }
    return -1;
}

