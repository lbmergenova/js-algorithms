import { len } from "./len.js";

/**
 * Добавляет элемент в конец массива.
 *
 * Мутирует исходный массив.
 *
 * @param {Array} arr - Исходный массив.
 * @param {*} item - Элемент для добавления.
 * @returns {number} - Новая длина массива.
 *
 * @example
 *   const numbers = [1, 2];
 *   push(numbers, 3);
 *   // Возвращает: 3
 *   // numbers === [1, 2, 3]
 *
 *   const letters = [];
 *   push(letters, "a");
 *   // Возвращает: 1
 *   // letters === ["a"]
 */
export function push(arr, item) {
    if (!Array.isArray(arr)) 
        throw new TypeError("Первый аргумент должен быть массивом");
    const arrLen = len(arr);
    arr[arrLen] = item;
    return arrLen + 1;
}
