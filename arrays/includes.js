import { len } from "./len.js";
import { indexOf } from "./index-of.js";

/**
 * Проверяет, наличая элемента в массиве.
 *
 * @param {Array} arr - Массив для поиска.
 * @param {*} item - Искомый элемент.
 * @returns {boolean} - true если элемент найден, false если нет.
 * @throws {TypeError} - Если первый аргумент не массив.
 *
 * @example
 *   indexOf([10, 20, 30], 20)      // true
 *   indexOf(['a', 'b', 'c'], 'a')  // true
 *   indexOf(['a', 'b', 'c'], 'd')  // false
 *
 */
export function includes(arr, item) {
    return indexOf(arr, item) !== -1;
}
