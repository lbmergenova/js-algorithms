import { len } from "./len.js";
import { slice } from "./slice.js"

/**
 * Удаляет часть элементов с массива и вставляет новые элементы начиная с позиции start.
 * 
 * Мутирует исходный массив.
 * 
 * @param {Array} arr - Исходный массив.
 * @param {number} start - Начальный индекс для удаления. Если отрицательный — отсчёт с конца.
 * @param {number} deleteCount - Количество элементов для удаления. Если не указан, удаляются все элементы от start до конца массива.
 * @param {...*} items - Элементы, которые вставляются начиная с позиции start.
 * @returns {Array} - Массив удаленных элементов.
 * @throws {TypeError} - Если arr - не массив или start или deleteCount - не числа.
 *
 * @example
 *   const arr = [1, 2, 3, 4];
 *   const removed = splice(arr, 1, 1, 'a', 'b');
 *   // removed → [2]
 *   // arr → [1, 'a', 'b', 3, 4]
 * 
 */
export function splice(arr, start, deleteCount, ...items) {
    if (!Array.isArray(arr))
        throw new TypeError("Первый аргумент должен быть массивом");
    if (typeof start !== 'number')
        throw new TypeError("Аргумент start должен быть числом");

    if (deleteCount !== undefined && typeof deleteCount !== 'number')
        throw new TypeError("Аргумент deleteCount должен быть числом");

    const lenArr = len(arr);
    if (Number.isNaN(start)) {
        start = 0;
    } else if (start < 0) {
        start += lenArr;

        if (start < 0)
            start = 0;
    } else if (start > lenArr) {
        start = lenArr;
    }

    if (deleteCount === undefined) {
        deleteCount = lenArr - start;
    } else if (Number.isNaN(deleteCount) || deleteCount < 0) {
        deleteCount = 0;
    } else if (deleteCount > lenArr - start) {
        deleteCount = lenArr - start;
    }

    const result = slice(arr, start, start + deleteCount);
    const lenItems = len(items);
    const newLenArr = lenArr - deleteCount + lenItems;
    const tailStart = start + deleteCount;
    if (deleteCount >= lenItems) {
        for (let i = tailStart, j = start + lenItems; i < lenArr; i++, j++) {
            arr[j] = arr[i];
        }
    } else {
        for (let i = lenArr - 1, j = newLenArr - 1; i >= tailStart; i--, j--) {
            arr[j] = arr[i]
        }
    }
    for (let i = 0; i < lenItems; i++) {
        arr[start + i] = items[i];
    }
    for (let i = newLenArr; i < lenArr; i++) {
        delete arr[i];
    }
    return result;
}
