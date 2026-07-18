import { describe, test, expect } from 'bun:test';
import { isEqual } from './is-equal.js';

describe('Тесты isEqual', () => {
    test('должна вернуть true для равных строк (\'hello\', \'hello\')', () => {
        expect(isEqual('hello', 'hello')).toBe(true);
    });

    test('должна вернуть false если a короче (\'hello\', \'hello!\')', () => {
        expect(isEqual('hello', 'hello!')).toBe(false);
    });
    
    test('должна вернуть false если a длиннее, но символы совпадают (\'hello!\', \'hello\')', () => {
        expect(isEqual('hello!', 'hello')).toBe(false);
    });
    
    test('должна вернуть true для равных пустых строк (\'\', \'\')', () => {
        expect(isEqual('', '')).toBe(true);
    });
    
    test('должна вернуть false для разных строк одинаковой длины (\'hello\', \'world\')', () => {
        expect(isEqual('hello', 'world')).toBe(false);
    });
    
    test('должна вернуть false для строк разной длины (\'hi\', \'hello\')', () => {
        expect(isEqual('hi', 'hello')).toBe(false);
    });
    
    test('должна вернуть false для строки с пробелом (\'hi\', \'hi \')', () => {
        expect(isEqual('hi', 'hi ')).toBe(false);
    });
    
    test('должна вернуть false если одна строка пустая, а другая нет (\'\', \'a\')', () => {
        expect(isEqual('', 'a')).toBe(false);
    });
    
    test('должна вернуть false если пробелы различаются (\' a\', \'a\')', () => {
        expect(isEqual(' a', 'a')).toBe(false);
    });
    
    test('должна вернуть true для кириллицы (\'привет\', \'привет\')', () => {
        expect(isEqual('привет', 'привет')).toBe(true);
    });
    
    test('должна выбросить TypeError если первый аргумент не строка (123, \'hello\')', () => {
        expect(() => isEqual(123, 'hello')).toThrow(TypeError);
    });
    
    test('должна выбросить TypeError если второй аргумент не строка (\'hello\', null)', () => {
        expect(() => isEqual('hello', null)).toThrow(TypeError);
    });
}
)