import { len } from "./len.js";
import { repeat } from "./repeat.js";
import { slice } from "./slice.js";

/**
 * Дополняет строку до указанной длины символами слева, справа или с обеих сторон.
 *
 * @param {string} str - Исходная строка.
 * @param {number} length - Длина результирующей строки.
 * @param {string} padStr - Строка, используемая для заполнения.
 * @param {'left'|'right'|'both'} side - Сторона, с которой выполняется заполнение.
 * @returns {string} - Новая строка, дополненная до указанной длины.
 * @throws {TypeError} - Если аргументы имеют неверный тип.
 * @throws {RangeError} - Если значение `side` не равно `'left'`, `'right'` или `'both'`.
 *
 * @example
 *   pad('hi', 5, '*', 'left');    // '***hi'
 *   pad('hi', 5, '*', 'right');   // 'hi***'
 *   pad('hi', 6, '*', 'both');    // '**hi**'
 */
export function pad(str, length, padStr, side) {
    if (typeof str !== 'string') 
        throw new TypeError('Первый аргумент должен быть строкой');
    if (typeof length !== 'number')
        throw new TypeError('Второй аргумент должен быть числом');
    if (typeof padStr !== 'string')
        throw new TypeError('Третий аргумент должен быть строкой');
    if (side !== 'left' && side !== 'right' && side !== 'both')
        throw new RangeError("Аргумент side должен быть 'left', 'right' или 'both'");

    const strLen = len(str);
    const padStrLen = len(padStr);
    
    if (length <= strLen || padStrLen === 0) {
        return str;
    }
    
    const paddingLength = length - strLen;
    let leftPadLength;
    let rightPadLength;
    if (side === 'left') {
        leftPadLength = paddingLength;
        rightPadLength = 0;
    } else if (side === 'right') {
        leftPadLength = 0;
        rightPadLength = paddingLength;
    } else {
        leftPadLength = (paddingLength - paddingLength % 2) / 2;
        rightPadLength = paddingLength - leftPadLength;
    }

    const leftPadStr = repeat(padStr, leftPadLength / padStrLen) 
        + slice(padStr, 0, leftPadLength % padStrLen);
    const rightPadStr = repeat(padStr, rightPadLength / padStrLen) 
        + slice(padStr, 0, rightPadLength % padStrLen);
    return leftPadStr + str + rightPadStr;
}
