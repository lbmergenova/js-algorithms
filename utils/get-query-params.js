import { indexOf } from "../string-utils/index-of.js";
import { len } from "../string-utils/len.js";

/**
 * Разбирает query-строку URL в объект.
 *
 * @param {string} url - Полный URL или query-строка.
 * @returns {Object} - Объект с параметрами.
 * @throws {TypeError} - Если аргумент не является строкой.
 *
 * @example
 *   getQueryParams('https://example.com?a=1&b=2&c=3')    // { a: '1', b: '2', c: '3' }
 * 
 */
export function getQueryParams(url) {
    if (typeof url !== 'string') {
        throw new TypeError("Аргумент должен быть строкой");
    }
    const result = {};
    const questionMark = indexOf(url, '?');
    let start = 0;
    if (questionMark !== -1) {
        start = questionMark + 1;
    } else if (indexOf(url, '=') === -1) {
        return result;
    }

    const lenUrl = len(url);
    if (start === lenUrl) {
        return result;
    }

    let key = '';
    let value = '';
    let isKey = true;
    for (let i = start; i < lenUrl; i++) {
        if (url[i] === '&' && !isKey){
            result[decodeURIComponent(key)] = decodeURIComponent(value);
            isKey = true;
            key = '';
            value = '';
        } else if (url[i] === '=' && isKey) {
            isKey = false;
            value = '';
        } else if (isKey) {
            key += url[i];
        } else {
            value += url[i];
        }
    }
    if (key !== '') {
        result[decodeURIComponent(key)] = decodeURIComponent(value);
    }
    return result;
}
