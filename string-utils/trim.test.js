import { describe, test, expect } from 'bun:test';
import { trim } from './trim.js';

describe('Тесты trim', () => {

    test("Должна удалить пробелы с обеих сторон: ('  hello  ') → 'hello'", () => {
        expect(trim('  hello  ')).toBe('hello');
    });

    test("Должна удалить пробелы только слева: ('  hello') → 'hello'", () => {
        expect(trim('  hello')).toBe('hello');
    });

    test("Должна удалить пробелы только справа: ('hello  ') → 'hello'", () => {
        expect(trim('hello  ')).toBe('hello');
    });

    test("Должна вернуть строку без изменений если пробелов нет: ('hello') → 'hello'", () => {
        expect(trim('hello')).toBe('hello');
    });

    test("Должна вернуть '' для строки из одних пробелов: ('   ') → ''", () => {
        expect(trim('   ')).toBe('');
    });

    test("Должна вернуть '' для пустой строки: ('') → ''", () => {
        expect(trim('')).toBe('');
    });

    test("Должна сохранить пробелы внутри строки: ('  he llo  ') → 'he llo'", () => {
        expect(trim('  he llo  ')).toBe('he llo');
    });

    test("Должна удалить только пробелы, не \\t и \\n: (' \\t hello \\n ') → '\\t hello \\n'", () => {
        expect(trim(' \t hello \n ')).toBe('\t hello \n');
    });

    test("Должна работать с кириллицей: ('  привет  ') → 'привет'", () => {
        expect(trim('  привет  ')).toBe('привет');
    });

    test("Должна выбросить TypeError если аргумент не строка: (123) → ошибка", () => {
        expect(() => trim()).toThrow('');
    });

    test("Должна выбросить TypeError если аргумент null", () => {
        expect(() => trim()).toThrow(TypeError);
    });

});
