import { len } from "./len.js";

/**
 * Переворачивает массив на месте.
 * 
 * Мутирует исходный массив.
 * 
 * @param {Array} arr - Исходный массив.
 * @returns {Array} - Изменённый исходный массив.
 * @throws {TypeError} - Если аргумент не является массивом.
 *
 * @example
 *   reverse([1, 2, 3]);    // [3, 2, 1]
 * 
 */
export function reverse(arr) {
    if (!Array.isArray(arr))
        throw new TypeError('Аргумент должен быть массивом');

    let left = 0;
    let right = len(arr) - 1;
    while (left < right) {
        const tmp = arr[left];
        arr[left] = arr[right];
        arr[right] = tmp;
        left++;
        right--;
    }
    return arr;
}
