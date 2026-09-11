import { len } from "../arrays/len.js"

/** 
 * Выполняет бинарный поиск элемента в отсортированном массиве.  
 * 
 * @param {number[]} arr - Отсортированный массив чисел. 
 * @param {number} target - Число, которое необходимо найти. 
 * @returns {number} Индекс найденного элемента или -1, если элемент не найден. 
 * @throws {TypeError} Если arr не является массивом. 
 * 
 * @example 
 *   binarySearch([1, 2, 3, 4, 5], 3);  // 2
 *   binarySearch([1, 2, 3, 4, 5], 6);  // -1 
 * 
 */
export function binarySearch(arr, target) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Аргумент должен быть массивом");
    }

    let left = 0
    let right = len(arr) - 1;
    while (left <= right) {
        const mid = (left + right) % 2 === 0 
                    ? (left + right) / 2 
                    : (left + right - 1) / 2;
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

