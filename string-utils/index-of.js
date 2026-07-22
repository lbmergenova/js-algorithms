import { len } from "./len.js";

/**
 * Возвращает индекс первого вхождения подстроки в строку.
 *
 * @param {string} str - Строка, в которой выполняется поиск.
 * @param {string} search - Подстрока, которую нужно найти.
 * @returns {number} - Индекс первого вхождения подстроки или `-1`, если подстрока не найдена.
 * @throws {TypeError} - Если хотя бы один из аргументов не является строкой.
 *
 * @example
 *   indexOf('hello', 'll');     // 2
 *   indexOf('hello', 'he');     // 0
 *   indexOf('hello', 'world');  // -1
 *   indexOf('hello', '');       // 0
 */
export function indexOf(str, search) {
    if (typeof str !== 'string' || typeof search !== 'string') 
        throw new TypeError("Аргументы должны быть строками");
    const strLen = len(str);
    const searchLen = len(search);
    if (searchLen === 0) return 0;
    if (searchLen > strLen) return -1;
    for (let i = 0; i <= strLen - searchLen; i++) {
        let isMatch = true;
        for (let j = 0; j < searchLen; j++) {
            if (str[i + j] !== search[j]) {
                isMatch = false;
                break;
            } 
        }
        if (isMatch) return i;
    }
    return -1;
}