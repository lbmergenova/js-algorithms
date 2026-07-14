import { describe, test, expect } from 'bun:test';
import { endsWith } from './ends-with.js';

describe('Тесты endsWith', () => {
    test('Должна вернуть true для одного символа (\'hello\', \'o\')', () => {
        expect(endsWith('hello', 'o')).toEqual(true);
    });

    test('Должна вернуть true для подстроки (\'hello\', \'llo\')', () => {
        expect(endsWith('hello', 'llo')).toEqual(true);
    });

    test('Должна вернуть false для несовпадающего вхождения (\'hello\', \'ell\')', () => {
        expect(endsWith('hello', 'ell')).toEqual(false);
    });

    test('Должна вернуть true для пустой поисковой строки', () => {
        expect(endsWith('hello', '')).toEqual(true);
    });

    test('Должна вернуть false если поисковая строка длиннее (\'hell\', \'hello\')', () => {
        expect(endsWith('hell', 'hello')).toEqual(false);
    });

    test('Должна вернуть true для точного совпадения (\'abc\', \'abc\')', () => {
        expect(endsWith('abc', 'abc')).toEqual(true);
    });

    test('Должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => endsWith(123, 'hello')).toThrow(TypeError);
    });
});