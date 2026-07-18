import { describe, test, expect } from 'bun:test';
import { isLess } from './is-less.js';

describe('Тесты isLess', () => {

    test('должна вернуть true если a явно меньше (\'car\', \'cat\')', () => {
        expect(isLess('car', 'cat')).toBe(true);
    });

    test('должна вернуть false если a больше (\'cat\', \'car\')', () => {
        expect(isLess('cat', 'car')).toBe(false);
    });

    test('должна вернуть false для равных строк (\'hello\', \'hello\')', () => {
        expect(isLess('hello', 'hello')).toBe(false);
    });

    test('должна вернуть true если a короче (\'hello\', \'hello!\')', () => {
        expect(isLess('hello', 'hello!')).toBe(true);
    });

    test('должна вернуть false если a длиннее, но символы совпадают (\'hello!\', \'hello\')', () => {
        expect(isLess('hello!', 'hello')).toBe(false);
    });
    
    test('должна вернуть true для заглавной vs строчной (\'A\', \'a\')', () => {
        expect(isLess('A', 'a')).toBe(true);
    });
    
    test('должна вернуть true для пустой vs непустой (\'\', \'a\')', () => {
        expect(isLess('', 'a')).toBe(true);
    });
    
    test('должна выбросить TypeError если аргументы не строка', () => {
        expect(() => isLess(123,'hello')).toThrow('Первый аргумент должен быть строкой');
        expect(() => isLess('hello')).toThrow('Второй аргумент должен быть строкой');
    });
}
)