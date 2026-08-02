import { len } from "./len.js";

/**
 * Заменяет все вхождения подстроки другой подстрокой.
 *
 * @param {string} str - Исходная строка.
 * @param {string} search - Подстрока, которую необходимо заменить.
 * @param {string} replacement - Подстрока, на которую выполняется замена.
 * @returns {string} - Новая строка со всеми замененными вхождениями подстроки.
 * @throws {TypeError} - Если хотя бы один из аргументов не является строкой.
 *
 * @example
 *   replaceAll('banana', 'na', 'NA');     // 'baNANA'
 *   replaceAll('hello', 'l', '_');        // 'he__o'
 *   replaceAll('hello', '', '-');         // '-h-e-l-l-o-'
 */
export function replaceAll(str, search, replacement) {
    if (typeof str !== 'string' || 
        typeof search !== 'string' || 
        typeof replacement !== 'string') {
            throw new TypeError('Аргументы должны быть строками');
        }
    
    let result = '';
    const searchLen = len(search);
    
    if (searchLen === 0) {
        result = replacement;
        for (let i = 0; i < len(str); i++) {
            result += str[i];
            result += replacement;
        }
        return result;
    }

    for (let i = 0; i < len(str); i++) {
        let isMatch = true;
        for (let j = 0; j < searchLen; j++) {
            if (search[j] !== str[i+j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            i = i + searchLen - 1;
            result +=replacement;
        } else {
            result += str[i];
        }
    }
    return result;
}
