import { len } from "../arrays/len.js";

/**
 * Глубокое копирования значения. Функция не изменяет исходный объект.
 *
 * @param {*} value - Объект для копирования.
 * @returns {*} - Полная независимая копия.
 *
 * @example
 *   values({ a: 1, b: 2, c: 3 })  //  { a: 1, b: 2, c: 3 }
 * 
 */
export function cloneDeep(value) {
    if (Array.isArray(value)) {
        const result = [];
        const lenArr = len(value);
        for (let i = 0; i < lenArr; i++) {
            result[i] = cloneDeep(value[i]);
        }
        return result;
    }
    if (typeof value === 'object') {
        if (value === null) {
            return null;
        }
        const result = {};
        for (const key in value) {
            result[key] = cloneDeep(value[key]);
        }
        return result;
    }
    return value;
}
