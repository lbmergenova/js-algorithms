import { describe, test, expect } from 'bun:test';
import { fromCSV } from './from-csv.js';
import { toCSV } from './to-csv.js';

describe('Тесты fromCSV', () => {

    test("Должна вернуть пустой массив для пустой строки: fromCSV('') → []", () => {
        const csvString = '';
        const result = fromCSV(csvString);
        expect(result).toEqual([]);
    });

    test("Должна разобрать простой CSV: fromCSV('a,b\n1,2') → [{ a: 1, b: 2 }]", () => {
        const csvString = 'a,b\n1,2';
        const result = fromCSV(csvString);
        expect(result).toEqual([{ a: 1, b: 2 }]);
    });

    test("Должна разобрать несколько строк: fromCSV('name,age\nАнна,25\nБорис,30') → [{ name: 'Анна', age: 25 }, { name: 'Борис', age: 30 }]", () => {
        const csvString = 'name,age\nАнна,25\nБорис,30';
        const result = fromCSV(csvString);
        expect(result).toEqual([{ name: 'Анна', age: 25 }, { name: 'Борис', age: 30 }]);
    });

    test("Должна обработать экранированную запятую: fromCSV('name\n\"Анна, Борис\"') → [{ name: 'Анна, Борис' }]", () => {
        const csvString = 'name\n"Анна, Борис"';
        const result = fromCSV(csvString);
        expect(result).toEqual([{ name: 'Анна, Борис' }]);
    });

    test("Должна обработать экранированные кавычки]", () => {
        const csvString = 'name\n"say ""hi"""';
        const result = fromCSV(csvString);
        expect(result).toEqual([{ name: 'say "hi"' }]);
    });

    test("Должна быть обратной к toCSV (простой случай): fromCSV(toCSV([{ a: '1', b: '2' }, { a: '3', b: '4' }])) → [{ a: '1', b: '2' }, { a: '3', b: '4' }]", () => {
        const csvString = toCSV([{ a: '1', b: 2 }, { a: '3', b: 4 }]);
        const result = fromCSV(csvString);
        expect(result).toEqual([{ a: '1', b: 2 }, { a: '3', b: 4 }]);
    });

    test(" Должна выбросить TypeError если obj равен null", () => {
        expect(() => fromCSV(null)).toThrow('Аргумент должен быть строкой');
        expect(() => fromCSV(123)).toThrow('Аргумент должен быть строкой');
        expect(() => fromCSV(true)).toThrow('Аргумент должен быть строкой');
    });

});
