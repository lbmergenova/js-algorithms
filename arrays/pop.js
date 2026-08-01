import { len } from "./len.js";

/**
 * Удаляет элемент в конец массива.
 *
 * Мутирует исходный массив.
 *
 * @param {Array} arr - Исходный массив.
 * @returns {*} - Удалённый элемент, либо undefined для пустого массива.
 *
 * @example
 *   const numbers = [10, 20, 30];
 *   pop(numbers);
 *   // Возвращает: 30
 *   // numbers === [10, 20]
 *
 *   const letters = ['a', 'b', 'c'];
 *   pop(letters);
 *   // Возвращает: 'c'
 *   // letters === ['a', 'b']
 */
export function pop(arr) {
    if (!Array.isArray(arr)) 
        throw new TypeError("Аргумент должен быть массиовом");
    const arrLen = len(arr);
    const item = arr[arrLen - 1];
    delete arr[arrLen - 1];
    return item;
}
