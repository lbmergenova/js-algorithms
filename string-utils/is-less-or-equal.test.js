import { describe, test, expect } from 'bun:test';
import { isLessOrEqual } from './is-less-or-equal';

describe('Тесты isLessOrEqual', () => {

    test('должна вернуть true если a меньше (\'car\', \'cat\')', () => {
        expect(isLessOrEqual('car', 'cat')).toEqual(true);
    });

    test('должна вернуть false если a больше (\'cat\', \'car\')', () => {
        expect(isLessOrEqual('cat', 'car')).toEqual(false);
    });

    test('должна вернуть true для равных строк (\'hello\', \'hello\')', () => {
        expect(isLessOrEqual('hello', 'hello')).toEqual(true);
    });

    test('должна вернуть true если a короче (\'hello\', \'hello!\')', () => {
        expect(isLessOrEqual('hello', 'hello!')).toEqual(true);
    });
    
    test('должна вернуть false если a длиннее, но символы совпадают (\'hello!\', \'hello\')', () => {
        expect(isLessOrEqual('hello!', 'hello')).toEqual(false);
    });
    
    test('должна выбросить TypeError если аргумент не строка', () => {
        expect(() => isLessOrEqual('hello')).toThrow(TypeError);
    });
}
)


