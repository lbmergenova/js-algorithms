import { push } from "../arrays/push.js";

/**
 * Возвращает собственные пары [ключ, значение] объекта. Не меняет исходный объект.
 *
 * @param {*} obj - Объект, пары [ключ, значение] которого нужно получить.
 * @returns {Array} - Массив пар [ключ, значение].
 * @throws {TypeError} - Если аргумент не является объектом.
 *
 * @example
 *   entries({ a: 1, b: 2, c: 3 })     // [['a', 1], ['b', 2], ['c', 3]]
 *
 */
export function entries(obj) {
    if (typeof obj !== "object" || obj === null)
        throw new TypeError('Аргумент должен быть объектом');

    const result = []
    for (const key in obj) {
        if (!Object.hasOwn(obj, key)) continue;
        push(result, [key, obj[key]]); 
    }
    return result;
}
