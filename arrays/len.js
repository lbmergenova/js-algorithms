/**
 * Возвращает длину массива.
 *
 * @param {Array} arr - Массив, длину которую надо определить.
 * @returns {number} - Длина массива.
 * @throws {TypeError} - Если аргумент не является массивом.
 *
 * @example
 *   len([1, 2, 3]);    // 3
 *   len([]);           // 0
 *
 */
export function len(arr) {
    if (!Array.isArray(arr)) 
        throw new TypeError('Аргумент должен быть массивом')
    let count = 0;
    while(arr[count] !== undefined) {
            count++;
    }
    return count;
}
