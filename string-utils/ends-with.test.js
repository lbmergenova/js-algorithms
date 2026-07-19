import { describe, test, expect } from 'bun:test';
import { endsWith } from './ends-with.js';

describe('Тесты endsWith', () => {
    test('Должна вернуть true для одного символа (\'hello\', \'o\')', () => {
        expect(endsWith('hello', 'o')).toBe(true);
    });

    test('Должна вернуть true для подстроки (\'hello\', \'llo\')', () => {
        expect(endsWith('hello', 'llo')).toBe(true);
    });

    test('Должна вернуть false для несовпадающего вхождения (\'hello\', \'ell\')', () => {
        expect(endsWith('hello', 'ell')).toBe(false);
    });

    test('Должна вернуть false для несовпадающего вхождения (\'ello\', \'hello\')', () => {
        expect(endsWith('ello', 'hello')).toBe(false);
    });

    test('Должна вернуть true для пустой поисковой строки', () => {
        expect(endsWith('hello', '')).toBe(true);
    });

    test('Должна вернуть false если поисковая строка длиннее (\'hell\', \'hello\')', () => {
        expect(endsWith('hell', 'hello')).toBe(false);
    });

    test('Должна вернуть false если поисковая строка длиннее (\'hello\', \'hillo\')', () => {
        expect(endsWith('hello', 'hillo')).toBe(false);
    });

    test('Должна вернуть true для точного совпадения (\'abc\', \'abc\')', () => {
        expect(endsWith('abc', 'abc')).toBe(true);
    });

    test('Должна выбросить TypeError если аргументы не строка', () => {
        expect(() => endsWith('hello')).toThrow("Аргументы должны быть строками");
        expect(() => endsWith(123, 'hello')).toThrow("Аргументы должны быть строками");
    });
});