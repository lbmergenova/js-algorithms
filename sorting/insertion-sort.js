/**
 * Сортирует массив чисел по возрастанию методом вставок.
 * Исходный массив не мутирует.
 * 
 * @param {number[]} array - Массив чисел для сортировки.
 * @returns {number[]} - Новый отсортированный массив.
 *
 * @example
 *   insertionSort([5, 2, 4, 1]);    // [1, 2, 4, 5]
 * 
 */
export function insertionSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Аргумент должен быть массивом");
    }

    const result = [...arr]
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const current = result[i];
        let j = i - 1;
        while (j >= 0 && result[j] > current) {
            result[j + 1] = result[j];
            j--;
        }
        result[j + 1] = current      
    }
    return result;
}
