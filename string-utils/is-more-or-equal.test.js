import { describe, test, expect } from 'bun:test';
import { isMoreOrEqual } from './is-more-or-equal.js';

describe('Тесты isMoreOrEqual', () => {

    test('должна вернуть true если a больше (\'cat\', \'car\')', () => {
        expect(isMoreOrEqual('cat', 'car')).toEqual(true);
    });

    test('должна вернуть false если a меньше (\'car\', \'cat\')', () => {
        expect(isMoreOrEqual('car', 'cat')).toEqual(false);
    });

    test('должна вернуть true для равных строк (\'hello\', \'hello\')', () => {
        expect(isMoreOrEqual('hello', 'hello')).toEqual(true);
    });

    test('должна вернуть true если a длиннее, но символы совпадают (\'hello!\', \'hello\')', () => {
        expect(isMoreOrEqual('hello!', 'hello')).toEqual(true);
    });

    test('должна вернуть false если a короче и символы совпадают (\'hello\', \'hello!\')', () => {
        expect(isMoreOrEqual('hello', 'hello!')).toEqual(false);
    });

    test('должна вернуть true для пустых строк (\'\', \'\')', () => {
        expect(isMoreOrEqual('', '')).toEqual(true);
    });

    test('должна выбросить TypeError если аргумент не строка', () => {
        expect(() => isMoreOrEqual('hello')).toThrow(TypeError);
    });
}
)
