import { len } from "./len";
import { push } from "../arrays/push";

/**
 * Разделяет строку на подстроки по указанному разделителю.
 *
 * @param {string} str - Строка для разделения.
 * @param {string} separator - Разделитель.
 * @returns {string[]} Массив полученных подстрок.
 * @throws {TypeError} - Если аргументы не являются строками или separator содержит больше одного символа.
 * 
 * @example
 * split("hello world", " ");   // ["hello", "world"]
 * split("a-b-c", "-");         // ["a", "b", "c"]
 * 
 */
export function split(str, separator) {
    if (typeof str !== "string" || typeof separator !== "string") {
        throw new TypeError("Аргументы должны быть строками");
    }
    if (len(separator) !== 1) {
        throw new Error("separator содержит больше одного символа");
    }

    const result = [];
    let current = "";

    const lenStr = len(str);
    for (let i = 0; i < lenStr; i++) {
        if (str[i] === separator) {
            push(result, current);
            current = "";
        } else {
            current += str[i];
        }
    }

    result.push(current);

    return result;
}