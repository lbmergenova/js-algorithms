import { describe, test, expect } from 'bun:test';
import { toCSV } from './to-csv.js';

describe('Тесты escapeCSV', () => {

    test("Должна вернуть пустую строку для пустого массива: toCSV([]) → ''", () => {
        const data = [];
        const result = toCSV(data);
        expect(result).toBe('');
    });

    test("Должна преобразовать один объект: toCSV([{ name: 'Анна', age: 25 }]) → 'name,age\\n\"Анна\",25\\n'", () => {
        const data = [{ name: 'Анна', age: 25 }];
        const result = toCSV(data);
        expect(result).toBe('name,age\n"Анна",25\n');
    });

    test("Должна преобразовать несколько объектов: toCSV([{ a: 1 }, { a: 2 }, { a: 3 }]) → 'a\\n1\\n2\\n3\\n'", () => {
        const data = [{ a: 1 }, { a: 2 }, { a: 3 }];
        const result = toCSV(data);
        expect(result).toBe('a\n1\n2\n3\n');
    });

    test("Должна экранировать значение с запятой: toCSV([{ name: 'Анна, Борис', age: 25 }]) → 'name,age\\n\"Анна, Борис\",25\\n'", () => {
        const data = [{ name: 'Анна, Борис', age: 25 }];
        const result = toCSV(data);
        expect(result).toBe('name,age\n"Анна, Борис",25\n');
    });

    test("Должна сохранять типы значений при преобразовании: строка '15' и число 20", () => {
        const data = [{ name: 'Анна', age: '15' },
                        { name: 'Борис', age: 20 }];
        const result = toCSV(data);
        expect(result).toBe('name,age\n"Анна","15"\n"Борис",20\n');
    });

    test('Должна экранировать значение с кавычками: toCSV([{ text: \'say "hi"\' }]) → \'text\\n"say ""hi"""\\n\'', () => {
        const data = [{ text: 'say "hi"' }];
        const result = toCSV(data);
        expect(result).toBe('text\n"say ""hi"""\n');
    });

    test('Должна экранировать значение с переносом строки: toCSV([{ desc: \'line1\\nline2\' }]) → \'desc\\n"line1\\nline2"\\n\'', () => {
        const data = [{ desc: 'line1\nline2' }];
        const result = toCSV(data);
        expect(result).toBe('desc\n"line1\nline2"\n');
    });

    test("Должна преобразовывать числа в строку: toCSV([{ x: 42 }, { x: -7 }]) → 'x\\n42\\n-7\\n'", () => {
        const data = [{ x: 42 }, { x: -7 }];
        const result = toCSV(data);
        expect(result).toBe('x\n42\n-7\n');
    });

    test("Должна преобразовывать булевы значения в строку: toCSV([{ a: true }, { a: false }]) → 'a\\ntrue\\nfalse\\n'", () => {
        const data = [{ a: true }, { a: false }];
        const result = toCSV(data);
        expect(result).toBe('a\ntrue\nfalse\n');
    });

    test("Должна превращать null в пустую строку: toCSV([{ x: 1 }, { x: null }]) → 'x\\n1\\n\\n' (между \\n и \\n — пусто)", () => {
        const data = [{ x: 1 }, { x: null }];
        const result = toCSV(data);
        expect(result).toBe('x\n1\n\n');
    });

    test("Должна превращать undefined в пустую строку: toCSV([{ x: 'a' }, {}]) → 'x\\n\"a\"\\n\\n' (отсутствующий ключ → пусто)", () => {
        const data = [{ x: 'a' }, {}];
        const result = toCSV(data);
        expect(result).toBe('x\n"a"\n\n');
    });

    test("Должна выбросить TypeError если аргумент не массив", () => {
        expect(() => toCSV(null)).toThrow('Аргумент должен быть массивом');
        expect(() => toCSV(123)).toThrow('Аргумент должен быть массивом');
        expect(() => toCSV('123')).toThrow('Аргумент должен быть массивом');
        expect(() => toCSV(true)).toThrow('Аргумент должен быть массивом');
    });
});
