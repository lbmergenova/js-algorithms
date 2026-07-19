/**
 * Возвращает длину строки.
 *
 * @param {string} str - Строка, длину которой нужно определить.
 * @returns {number} - Длина строки.
 * @throws {TypeError} - Если аргумент не является строкой.
 *
 * @example
 *   len('hello');   // 5
 *   len('');        // 0
 */
export function len(str) {
    if (typeof str !== 'string') throw new TypeError('Аргумент должен быть строкой');
    
    let length = 0;
    while (str[length]) {
        length++;
    }
    return length;
}