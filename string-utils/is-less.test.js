import { describe, test, expect } from 'bun:test';
import { isLess } from './is-less.js';

describe('Тесты isLess', () => {

    test('должна вернуть true если a явно меньше (\'car\', \'cat\')', () => {
        expect(isLess('car', 'cat')).toEqual(true);
    });

    test('должна вернуть false если a больше (\'cat\', \'car\')', () => {
        expect(isLess('cat', 'car')).toEqual(false);
    });

    test('должна вернуть false для равных строк (\'hello\', \'hello\')', () => {
        expect(isLess('hello', 'hello')).toEqual(false);
    });

    test('должна вернуть true если a короче (\'hello\', \'hello!\')', () => {
        expect(isLess('hello', 'hello!')).toEqual(true);
    });
    
    test('должна вернуть true для заглавной vs строчной (\'A\', \'a\')', () => {
        expect(isLess('A', 'a')).toEqual(true);
    });
    
    test('должна вернуть true для пустой vs непустой (\'\', \'a\')', () => {
        expect(isLess('', 'a')).toEqual(true);
    });
    
    test('должна выбросить TypeError если аргумент не строка', () => {
        expect(() => isLess('hello')).toThrow(TypeError);
    });
}
)


