/**
 * Сортирует массив чисел по возрастанию методом быстрой сортировки.
 * Исходный массив не мутирует.
 *
 * @param {number[]} arr - Массив чисел для сортировки.
 * @returns {number[]} - Новый отсортированный массив.
 *
 * @example
 *   quickSort([5, 2, 4, 1]);    // [1, 2, 4, 5]
 * 
 */
export function quickSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Аргумент должен быть массивом");
    }

    const n = arr.length;
    if (n <= 1) {
        return [...arr];
    }
    const pivot = arr[0];
    const arrLess = [];
    const arrGreater = [];
    for (let i = 1; i < n; i++) {
        if (arr[i] <= pivot) {
            arrLess.push(arr[i]);
        } else {
            arrGreater.push(arr[i]);
        }
    }
    return quickSort(arrLess).concat(pivot, quickSort(arrGreater));;
}
