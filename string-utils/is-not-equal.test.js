import { describe, test, expect } from 'bun:test';
import { isNotEqual } from './is-not-equal.js';

describe('Тесты isEqual', () => {
    test('', () => {
        expect(isNotEqual('hello', 'world')).toEqual(true);
    });

    test('', () => {
        expect(isNotEqual('abc', 'abc')).toEqual(false);
    });

    test('', () => {
        expect(isNotEqual('hi', 'hello')).toEqual(true);
    });

    test('', () => {
        expect(isNotEqual('', '')).toEqual(false);
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

// должна вернуть true для разных строк ('hello', 'world')
// должна вернуть false для одинаковых строк ('abc', 'abc')
// должна вернуть true для строк разной длины ('hi', 'hello')
// должна вернуть false для пустых строк ('', '')
// должна выбросить TypeError если аргумент(ы) не строка