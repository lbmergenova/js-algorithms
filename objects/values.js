import { push } from "../arrays/push.js";

/**
 * Возвращает собственные значения объекта. Не меняет исходный объект.
 *
 * @param {*} obj - Объект, значения которого нужно получить.
 * @returns {Array} - Массив значений свойств объекта.
 * @throws {TypeError} - Если аргумент не является объектом.
 *
 * @example
 *   values({ a: 1, b: 2, c: 3 })     // [1, 2, 3]
 * 
 */
export function values(obj) {
    if (typeof obj !== "object" || obj === null)
        throw new TypeError('Аргумент должен быть объектом');

    const result = [];
    for (const key in obj) {
        if (!Object.hasOwn(obj, key)) continue;
        push(result, obj[key]);
    }
    return result;
}
