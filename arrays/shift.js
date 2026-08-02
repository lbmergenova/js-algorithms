import { len } from "./len.js";

/**
 * Удаляет элемент в начале массива со сдвигом.
 *
 * Мутирует исходный массив.
 *
 * @param {Array} arr - Исходный массив.
 * @returns {*} - Удалённый элемент, либо undefined для пустого массива.
 *
 * @example
 *   const numbers = [10, 20, 30];
 *   unshift(numbers);
 *   // Возвращает: 10
 *   // numbers === [20, 30]
 *
 *   const letters = ['a', 'b', 'c'];
 *   unshift(letters);
 *   // Возвращает: 'a'
 *   // letters === ['b', 'c']
 */
export function shift(arr) {
    if (!Array.isArray(arr))
        throw new TypeError("Аргумент должен быть массивом");
    const lastIndex = len(arr) - 1;
    const item_0 = arr[0];
    for (let i = 0; i < lastIndex; i++) {
        arr[i] = arr[i + 1];      
    }
    delete arr[lastIndex];
    return item_0;
}
