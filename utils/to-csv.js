// import { keys } from "";
import { join } from "../arrays/join.js";
import { len } from "../arrays/len.js";
import { push } from "../arrays/push.js";
import { indexOf } from "../string-utils/index-of.js";
import { includes } from "../string-utils/includes.js";
import { keys } from "../objects/keys.js";
import { values } from "../objects/values.js";
import { split } from "../string-utils/split.js";

function escapeCSV(values) {
    const lenValues = len(values);
    for (let i = 0; i < lenValues; i++) {
        if (values[i] === null || values[i] === undefined) {
            values[i] = '';
        } else if (typeof values[i] === 'string') {
            values[i] = '"' + join(split(values[i], '"'), '""') + '"';
        } else {
            values[i] = String(values[i]);
        }
    }
    return values;
}

/**
 * Преобразует массив объектов в CSV-строку.
 * Функция не изменяет исходные данные.
 * Первый объект определяет названия и порядок столбцов.
 * Значения, содержащие запятые, двойные кавычки или переносы строк,
 * заключаются в двойные кавычки.
 * Двойные кавычки внутри значения экранируются удвоением.
 * 
 * @param {Array<Object>} data - Массив объектов для преобразования.
 * @returns {string} - CSV - строка. Для пустого массива возвращается пустая строка.
 * @throws {TypeError} - Если аргумент не является массивом.
 * 
 * 
 * @example
 *   toCSV([{ name: 'Анна', age: 25 }]);         // 'name,age\nАнна,25\n'
 *   toCSV([{ name: 'Анна, Борис', age: 25 }]);  // 'name,age\n"Анна, Борис",25\n'
 *   toCSV([]);  // ''
 *
 */
export function toCSV(data) {
    if (!Array.isArray(data)) {
        throw new TypeError('Аргумент должен быть массивом');
    }
    const lenData = len(data);
    if (lenData === 0) {
        return '';
    }
    const keysData = keys(data[0]);
    let result = join(keysData, ',');
    for (let i = 0; i < lenData; i++) {
        result += '\n'
        result += join(escapeCSV(values(data[i])), ',');
    }
    return result + '\n';
}
