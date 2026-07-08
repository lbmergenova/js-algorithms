import { describe, test, expect } from 'bun:test';
import { isEqual } from './is-equal.js';

describe('Тесты isEqual', () => {
    test('должна вернуть true для равных строк (\'hello\', \'hello\')', () => {
        expect(isEqual('hello', 'hello')).toEqual(true);
    });
    
    test('должна вернуть true для равных пустых строк (\'\', \'\')', () => {
        expect(isEqual('', '')).toEqual(true);
    });
    
    test('должна вернуть false для разных строк одинаковой длины (\'hello\', \'world\')', () => {
        expect(isEqual('hello', 'world')).toEqual(false);
    });
    
    test('должна вернуть false для строк разной длины (\'hi\', \'hello\')', () => {
        expect(isEqual('hi', 'hello')).toEqual(false);
    });
    
    test(' должна вернуть false для строки с пробелом (\'hi\', \'hi \')', () => {
        expect(isEqual('hi', 'hi ')).toEqual(false);
    });
    
    test('должна вернуть false если одна строка пустая, а другая нет (\'\', \'a\')', () => {
        expect(isEqual('', 'a')).toEqual(false);
    });
    
    test('должна вернуть false если пробелы различаются (\' a\', \'a\')', () => {
        expect(isEqual(' a', 'a')).toEqual(false);
    });
    
    test('должна вернуть true для кириллицы (\'привет\', \'привет\')', () => {
        expect(isEqual('привет', 'привет')).toEqual(true);
    });
    
    test('должна выбросить TypeError если первый аргумент не строка (123, \'hello\')', () => {
        expect(() => isEqual(123, 'hello')).toThrow(TypeError);
    });
    
    test('должна выбросить TypeError если второй аргумент не строка (\'hello\', null)', () => {
        expect(() => isEqual('hello', null)).toThrow(TypeError);
    });

    test('должна выбросить TypeError если второй аргумент не строка (\'hello\')', () => {
        expect(() => isEqual('hello')).toThrow(TypeError);
    });
    // test('', () => {});
}
)

// должна вернуть true для равных строк ('hello', 'hello')
// должна вернуть true для равных пустых строк ('', '')
// должна вернуть false для разных строк одинаковой длины ('hello', 'world')
// должна вернуть false для строк разной длины ('hi', 'hello')
// должна вернуть false для строки с пробелом ('hi', 'hi ')
// должна вернуть false если одна строка пустая, а другая нет ('', 'a')
// должна вернуть false если пробелы различаются (' a', 'a')
// должна вернуть true для кириллицы ('привет', 'привет')
// должна выбросить TypeError если первый аргумент не строка (123, 'hello')
// должна выбросить TypeError если второй аргумент не строка ('hello', null), ('hello')