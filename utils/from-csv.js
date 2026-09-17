import { len } from "../string-utils/len.js";
import { push } from "../arrays/push.js";
import { len as lenArray } from "../arrays/len.js";

function convertValue(value, quoted) {
    if (quoted) {
        return value;
    }

    if (value === '') {
        return null;
    }

    if (value === 'true') {
        return true;
    }

    if (value === 'false') {
        return false;
    }

    if (value !== '' && !isNaN(Number(value))) {
        return Number(value);
    }

    return value;
}

/**
 * Преобразует CSV-строку в массив объектов.
 * Разбор выполняется конечным автоматом, который учитывает значения
 * в двойных кавычках, экранированные двойные кавычки и переносы строк
 * внутри кавычек.
 *
 * Формат совместим с toCSV: результат fromCSV(toCSV(data))
 * сохраняет значения исходных данных, включая различие между строковыми
 * и числовыми значениями.
 * 
 * @param {string} csvString - CSV-строка для преобразования.
 * @returns {Array<Object>} Массив объектов, созданных из CSV-данных.
 * @throws {TypeError} Если аргумент не является строкой.
 * 
 * 
 * @example
 *   fromCSV('name,age\n"Анна",25\n');
 *   // [{ name: 'Анна', age: 25 }]
 *   
 *   fromCSV('name,age\n"Анна",25\n"Борис",20\n');
 *   // [
 *   // { name: 'Анна', age: 25 },
 *   // { name: 'Борис', age: 20 }
 *   // ]
 *   
 *   fromCSV('');
 *   // []
 * 
 */
export function fromCSV(csvString) {
    if (typeof csvString !== 'string') {
        throw new TypeError('Аргумент должен быть строкой');
    }

    const rows = [];
    let currentRow = [];
    let currentField = '';
    let inQuotes = false;
    let wasQuoted = false;

    const csvLen = len(csvString);
    for (let i = 0; i < csvLen; i++) {
        const char = csvString[i];

        if (inQuotes) {
            if (char === '"' && csvString[i + 1] === '"') {
                currentField += '"';
                i++;
            } else if (char === '"') {
                inQuotes = false;
            } else {
                currentField += char;
            }
            continue;
        }

        if (char === '"') {
            inQuotes = true;
            wasQuoted = true;
        } else if (char === ',') {
            push(currentRow, convertValue(currentField, wasQuoted));
            currentField = '';
            wasQuoted = false;
        } else if (char === '\n') {
            push(currentRow, convertValue(currentField, wasQuoted));
            push(rows, currentRow);
            currentRow = [];
            currentField = '';
            wasQuoted = false;
        } else {
            currentField += char;
        }
    }

    if (currentField != '') {
        push(currentRow, convertValue(currentField, wasQuoted));
        push(rows, currentRow);
    }
    const result = [];
    const lenRows = lenArray(rows);
    if (lenRows != 0) {
        const lenKeys = lenArray(rows[0]);
        for (let i = 1; i < lenRows; i++) {
            const obj = {};
            for (let j = 0; j < lenKeys; j++) {
                obj[rows[0][j]] = rows[i][j];
            }
            push(result, obj);
        }
    }
    return result;
}

