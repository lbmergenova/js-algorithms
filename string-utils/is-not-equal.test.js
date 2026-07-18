import { describe, test, expect } from 'bun:test';
import { isNotEqual } from './is-not-equal.js';

describe('Тесты isEqual', () => {
    test('должна вернуть true для разных строк (\'hello\', \'world\')', () => {
        expect(isNotEqual('hello', 'world')).toBe(true);
    });

    test('должна вернуть false для одинаковых строк (\'abc\', \'abc\')', () => {
        expect(isNotEqual('abc', 'abc')).toBe(false);
    });

    test('должна вернуть true для строк разной длины (\'hi\', \'hello\')', () => {
        expect(isNotEqual('hi', 'hello')).toBe(true);
    });

    test('должна вернуть false для пустых строк (\'\', \'\')', () => {
        expect(isNotEqual('', '')).toBe(false);
    });

    test('должна выбросить TypeError если второй аргумент не строка', () => {
        expect(() => isNotEqual('123',123)).toThrow(TypeError);;
    });

    test('должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => isNotEqual(null,'abc')).toThrow(TypeError);;
    });

    test('должна выбросить TypeError если один аргумент отсутствует', () => {
        expect(() => isNotEqual('abc')).toThrow(TypeError);;
    });
}
)