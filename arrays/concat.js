import { len } from "./len.js";

/**
 * Объединяет два массива в новый.
 * Исходные массивы не мутируют.
 *
 * @param {Array} arr1 - Первый массив.
 * @param {Array} arr2 - Второй массив.
 * @returns {Array} - Новый массив из элементов arr1 и arr2.
 * @throws {TypeError} - Если аргументы не массивы.
 *
 * @example
 *   concat([1, 2], [3, 4, 5]); // [1, 2, 3, 4, 5]
 */
export function concat(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2))
        throw new TypeError("Аргументы должны быть массивами");
    
    const result = [];
    const lenArr1 = len(arr1);
    const lenArr2 = len(arr2);
    for (let i = 0; i < lenArr1; i++) {
        result[i] = arr1[i];
    }
    for (let i = 0; i < lenArr2; i++) {
        result[lenArr1 + i] = arr2[i];
    }
    return result;
}
