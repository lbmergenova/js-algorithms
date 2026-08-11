import { len } from "./len.js";
import { push } from "./push.js";

/**
 * Разглаживает вложенные массивы.
 *
 * @param {Array} arr - Массив для разглаживания.
 * @param {number} depth - Глубина разглаживания (необязательный, по умолчанию 1). Infinity — разгладить полностью.
 * @returns {Array} - Новый плоский массив.
 * @throws {TypeError} - Если первый аргумент не является массивом или второй не является числом.
 *
 * @example
 *   flat([1, [2, [3, [4]]]], 2)        // [1, 2, 3, [4]]
 *   flat([1, 2, [3, 4]])               // [1, 2, 3, 4]
 *   flat([1, [2, [3, [4]]]], Infinity) // [1, 2, 3, 4]
 */
export function flat(arr, depth = 1){
    if (!Array.isArray(arr))
        throw new TypeError("Первый аргумент должен быть массивом");
    if (typeof depth !== 'number')
        throw new TypeError("Второй аргумент должен быть числом");

    if (Number.isNaN(depth) || depth < 0)
        depth = 0;

    let result = [];
    const lenArr = len(arr);
    for (let i = 0; i < lenArr; i++) {
        if (depth === 0 || !Array.isArray(arr[i])) {
            push(result, arr[i]);
        } else {
            const nested = flat(arr[i], depth - 1);
            const lenNested = len(nested);
            for (let j = 0; j < lenNested; j++) {
                push(result, nested[j]);
            }
        }
    }
    return result;
}

/**
Вариант с reduce

import { push } from "./push.js";
import { concat } from "./concat.js";
import { reduce } from "./reduce.js"

export function flat(arr, depth = 1){
    if (!Array.isArray(arr))
        throw new TypeError("Первый аргумент должен быть массивом");
    if (typeof depth !== 'number')
        throw new TypeError("Второй аргумент должен быть числом");

    if (Number.isNaN(depth) || depth < 0)
        depth = 0;
    
    return reduce(arr, (acc, el) => {
        if (depth === 0 || !Array.isArray(el)) {
            push(acc, el);
            return acc;
        }
        return concat(acc, flat(el, depth - 1));
    }, [])
}

*/
