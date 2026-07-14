import { describe, test, expect } from 'bun:test';
import { startsWith } from './starts-with.js';

describe('Тесты startsWith', () => {
    test('Должна вернуть true для одного символа (\'hello\', \'h\')', () => {
        expect(startsWith('hello', 'h')).toEqual(true);
    });

    test('Должна вернуть true для подстроки (\'hello\', \'hel\')', () => {
        expect(startsWith('hello', 'hel')).toEqual(true);
    });

    test('Должна вернуть false для несовпадающего вхождения (\'hello\', \'el\')', () => {
        expect(startsWith('hello', 'el')).toEqual(false);
    });

    test('Должна вернуть true для пустой поисковой строки (\'hello\', \'\')', () => {
        expect(startsWith('hello', '')).toEqual(true);
    });

    test('Должна вернуть false если поисковая строка длиннее (\'hell\', \'hello\')', () => {
        expect(startsWith('hell', 'hello')).toEqual(false);
    });

    test('Должна вернуть true для точного совпадения (\'abc\', \'abc\')', () => {
        expect(startsWith('abc', 'abc')).toEqual(true);
    });

    test('Должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => startsWith(123, 'hello')).toThrow('Аргументы должны быть строкой');
    });
});