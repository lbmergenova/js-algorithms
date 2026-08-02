import { len } from "./len.js";

/**
 * Добавляет элемент в начало массива со сдвигом.
 *
 * Мутирует исходный массив.
 *
 * @param {Array} arr - Исходный массив.
 * @param {*} item - Элемент для добавления.
 * @returns {number} - Новая длина массива.
 *
 * @example
 *   const numbers = [2, 3];
 *   unshift(numbers, 1);
 *   // Возвращает: 3
 *   // numbers === [1, 2, 3]
 *
 *   const letters = [];
 *   unshift(letters, "a");
 *   // Возвращает: 1
 *   // letters === ["a"]
 */
export function unshift(arr, item) {
    if (!Array.isArray(arr))
        throw new TypeError("Первый аргумент должен быть массивом");
    const arrLen = len(arr);
    for (let i = arrLen; i > 0; i--) {
        arr[i] = arr[i - 1];        
    }
    arr[0] = item;
    return arrLen + 1;
}
