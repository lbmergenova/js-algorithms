import { len } from "./len.js";
import { repeat } from "./repeat.js";

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
    
    if (length <= strLen || padStrLen === 0)
        return str;

    if (side === 'left' || side === 'right') {
        let padStrToAdd = repeat(padStr, (length - strLen) / padStrLen);
        const padCharsToAdd = (length - strLen) % padStrLen
        for (let i = 0; i < padCharsToAdd; i++) {
            padStrToAdd += padStr[0];
        }
        if (side === 'left')
            return padStrToAdd + str;
        return str + padStrToAdd;
    }

    const leftPadLength = (length - strLen) / 2;
    let leftPadStr = repeat(padStr, leftPadLength / padStrLen);
    const leftPadCharsToAdd = leftPadLength - len(leftPadStr) - leftPadLength % 1;
    for (let i = 0; i < leftPadCharsToAdd; i++) {
        leftPadStr += padStr[i]
    }
    const rightPadLength = length - len(leftPadStr) - strLen;
    let rightPadStr = repeat(padStr, rightPadLength / padStrLen);
    const rightPadCharsToAdd = rightPadLength - len(rightPadStr);
    for (let i = 0; i < rightPadCharsToAdd; i++) {
        rightPadStr += padStr[i];
    }
    return leftPadStr + str + rightPadStr;
}
