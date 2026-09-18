/**
 * Сортирует массив чисел по возрастанию методом выбора.
 * Исходный массив не мутирует.
 * 
 * @param {number[]} arr - Массив чисел для сортировки.
 * @returns {number[]} - Новый отсортированный массив.
 *
 * @example
 *   selectionSort([5, 2, 4, 1]);    // [1, 2, 4, 5]
 * 
 */
export function selectionSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Аргумент должен быть массивом");
    }

    const result = [...arr]
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const tmp = result[i];
            result[i] = result[minIndex];
            result[minIndex] = tmp;
        }
    }
    return result;
}

