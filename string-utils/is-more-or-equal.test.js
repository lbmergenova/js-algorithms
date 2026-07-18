import { describe, test, expect } from 'bun:test';
import { isMoreOrEqual } from './is-more-or-equal.js';

describe('Тесты isMoreOrEqual', () => {

    test('должна вернуть true если a больше (\'cat\', \'car\')', () => {
        expect(isMoreOrEqual('cat', 'car')).toBe(true);
    });

    test('должна вернуть false если a меньше (\'car\', \'cat\')', () => {
        expect(isMoreOrEqual('car', 'cat')).toBe(false);
    });

    test('должна вернуть true для равных строк (\'hello\', \'hello\')', () => {
        expect(isMoreOrEqual('hello', 'hello')).toBe(true);
    });

    test('должна вернуть true если a длиннее, но символы совпадают (\'hello!\', \'hello\')', () => {
        expect(isMoreOrEqual('hello!', 'hello')).toBe(true);
    });

    test('должна вернуть false если a короче и символы совпадают (\'hello\', \'hello!\')', () => {
        expect(isMoreOrEqual('hello', 'hello!')).toBe(false);
    });

    test('должна вернуть true для пустых строк (\'\', \'\')', () => {
        expect(isMoreOrEqual('', '')).toBe(true);
    });

    test('должна выбросить TypeError если аргументы не строка', () => {
        expect(() => isMoreOrEqual(123,'hello')).toThrow('Первый аргумент должен быть строкой');
        expect(() => isMoreOrEqual('hello')).toThrow('Второй аргумент должен быть строкой');
    });
}
)
