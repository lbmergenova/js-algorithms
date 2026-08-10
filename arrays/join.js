import { len } from "./len.js";

/**
 * Объединяет элементы массива в строку, используя указанный разделитель.
 * Исходный массив не мутирует.
 *
 * @param {Array} arr - Массив элементов.
 * @param {string} separator - разделитель между элементами (по умолчанию ',').
 * @returns {string} - Cтрока из элементов, разделённых separator.
 * @throws {TypeError} - Если превый аргумент не массив, а второй аргумент - не строка.
 *
 * @example
 *   join([1, 2, 3], ';')   // "1;2;3"
 */
export function join(arr, separator = ',') {
    if (!Array.isArray(arr))
        throw new TypeError("Первый аргумент должен быть массивом");
    if (typeof separator !== 'string')
        throw new TypeError("Второй аргумент должен быть строкой");
    
    const lenArr = len(arr);
    if (lenArr === 0)
        return '';
    const lastIndex = lenArr - 1;
    let result = '';
    for (let i = 0; i < lastIndex; i++) {
        if (arr[i] !== null) {
            result += arr[i];
        }
        result += separator;
    }
    if (arr[lastIndex] !== null) {
        result += arr[lastIndex];
    }
    return result;
}
