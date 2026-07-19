import { describe, test, expect } from 'bun:test';
import { startsWith } from './starts-with.js';

describe('Тесты startsWith', () => {
    test('Должна вернуть true для одного символа (\'hello\', \'h\')', () => {
        expect(startsWith('hello', 'h')).toBe(true);
    });

    test('Должна вернуть true для подстроки (\'hello\', \'hel\')', () => {
        expect(startsWith('hello', 'hel')).toBe(true);
    });

    test('Должна вернуть false для несовпадающего вхождения (\'hello\', \'el\')', () => {
        expect(startsWith('hello', 'el')).toBe(false);
    });

    test('Должна вернуть true для пустой поисковой строки (\'hello\', \'\')', () => {
        expect(startsWith('hello', '')).toBe(true);
    });

    test('Должна вернуть false если поисковая строка длиннее (\'hell\', \'hello\')', () => {
        expect(startsWith('hell', 'hello')).toBe(false);
    });

    test('Должна вернуть true для точного совпадения (\'abc\', \'abc\')', () => {
        expect(startsWith('abc', 'abc')).toBe(true);
    });

    test('Должна выбросить TypeError если аргументы не строка', () => {
        expect(() => startsWith(123, 'hello')).toThrow('Аргументы должны быть строками');
        expect(() => startsWith('hello')).toThrow('Аргументы должны быть строками');
    });
});