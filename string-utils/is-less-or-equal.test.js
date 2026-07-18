import { describe, test, expect } from 'bun:test';
import { isLessOrEqual } from './is-less-or-equal';

describe('Тесты isLessOrEqual', () => {

    test('должна вернуть true если a меньше (\'car\', \'cat\')', () => {
        expect(isLessOrEqual('car', 'cat')).toBe(true);
    });

    test('должна вернуть false если a больше (\'cat\', \'car\')', () => {
        expect(isLessOrEqual('cat', 'car')).toBe(false);
    });

    test('должна вернуть true для равных строк (\'hello\', \'hello\')', () => {
        expect(isLessOrEqual('hello', 'hello')).toBe(true);
    });

    test('должна вернуть true если a короче (\'hello\', \'hello!\')', () => {
        expect(isLessOrEqual('hello', 'hello!')).toBe(true);
    });
    
    test('должна вернуть false если a длиннее, но символы совпадают (\'hello!\', \'hello\')', () => {
        expect(isLessOrEqual('hello!', 'hello')).toBe(false);
    });
    
    test('должна выбросить TypeError если аргументы не строки', () => {
        expect(() => isLessOrEqual(123,'hello')).toThrow('Первый аргумент должен быть строкой');
        expect(() => isLessOrEqual('hello')).toThrow('Второй аргумент должен быть строкой');
    });
}
)