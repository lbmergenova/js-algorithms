import { push } from "../arrays/push.js";

/**
 * Возвращает собственные ключи объекта. Не меняет исходный объект.
 *
 * @param {Object} obj - Объект, ключи которого нужно получить.
 * @returns {Array} - Массив строк (ключей объекта).
 * @throws {TypeError} - Если аргумент не является объектом.
 *
 * @example
 *   keys({ a: 1, b: 2, c: 3 })     // ['a', 'b', 'c']
 * 
 */
export function keys(obj) {
    if (typeof obj !== "object" || obj === null)
        throw new TypeError('Аргумент должен быть объектом');

    const result = []
    for (const key in obj) {
        if (!Object.hasOwn(obj, key)) continue;
        push(result, key); 
    }
    return result;
}
