import { len } from "../arrays/len.js";
import { keys } from "./keys.js";

/**
 * Глубокое структурное сравнение двух значений. Функция не изменяет исходные объекты.
 *
 * @param {*} a - Первое значение для сравнения.
 * @param {*} b - Второе значение для сравнения.
 * @returns {boolean} - true если значения структурно идентичны, false иначе.
 *
 * @example
 *   isEqualDeep({ a: 1, b: 2 }, { a: 1, b: 2 })    // true
 *   isEqualDeep({ a: 1 }, { a: 2 })                // false
 * 
 */
export function isEqualDeep(a, b) {
    if ( a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a === 'object') {
        if (a === null || b === null) {
            return a === b;
        }
        if (Array.isArray(a) !== Array.isArray(b)) {
            return false;
        }

        const keysA = keys(a);
        const keysB = keys(b);
        const lenKeysA = len(keysA);
        if (lenKeysA !== len(keysB)) {
            return false
        }
        for (let i = 0; i < lenKeysA; i++) {
            if (!b.hasOwnProperty(keysA[i])) {
                return false;
            }
            if (!isEqualDeep(a[keysA[i]], b[keysA[i]])) {
                return false;
            }
        }
        return true;
    }
    return false;
}
