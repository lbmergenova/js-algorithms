import { len } from "../arrays/len.js"

/**
 * Сортирует массив чисел по возрастанию методом пузырька.
 * Исходный массив не мутирует.
 *
 * @param {number[]} array - Массив чисел для сортировки.
 * @returns {number[]} - Новый отсортированный массив.
 *
 * @example
 *   bubbleSort([5, 2, 4, 1]);    // [1, 2, 4, 5]
 * 
 */
export function bubbleSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Аргумент должен быть массивом");
    }

    const result = [...arr]
    const n = len(arr);
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
                const tmp = result[j];
                result[j] = result[j+1];
                result[j+1] = tmp;
            }
        }
    }
    return result
}
