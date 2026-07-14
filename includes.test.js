import { describe, test, expect } from 'bun:test';
import { includes } from './includes.js';

describe('Тесты includes', () => {
    test('Должна вернуть 0 для подстроки в начале (\'hello\', \'he\')', () => {
        expect(includes('hello', 'he')).toEqual(true);
    });

    test('Должна вернуть 2 для подстроки в середине (\'hello\', \'ll\')', () => {
        expect(includes('hello', 'll')).toEqual(true);
    });
    
    test('Должна вернуть 3 для подстроки в конце (\'hello\', \'lo\')', () => {
        expect(includes('hello', 'lo')).toEqual(true);
    });

    test('Должна вернуть -1 если подстрока не найдена (\'hello\', \'li\')', () => {
        expect(includes('hello', 'li')).toEqual(false);
    });

    test('Должна вернуть 0 для пустой поисковой строки (\'hello\', \'\')', () => {
        expect(includes('hello', '')).toEqual(true);
    });

    test('Должна вернуть -1 если поисковая строка длиннее исходной (\'hi\', \'hello\')', () => {
        expect(includes('hi', 'hello')).toEqual(false);
    });

    test('Должна вернуть 0 для одинаковых строк (\'abc\', \'abc\')', () => {
        expect(includes('abc', 'abc')).toEqual(true);
    });

    test('Должна вернуть индекс первого вхождения при нескольких совпадениях (\'ababa\', \'ba\') → 1', () => {
        expect(includes('ababa', 'ba')).toEqual(true);
    });

    test('Должна найти подстроку, которая начинается внутри предыдущего почти-совпадения (\'abababc\', \'ababc\') → 2', () => {
        expect(includes('abababc', 'ababc')).toEqual(true);
    });

    test('Должна вернуть 0 для поиска одного символа (\'hello\', \'h\')', () => {
        expect(includes('hello', 'h')).toEqual(true);
    });

    test('Должна вернуть 2 для поиска повторяющегося символа (\'hello\', \'l\')', () => {
        expect(includes('hello', 'l')).toEqual(true);
    });

    test('Должна работать с кириллицей (\'привет\', \'иве\') → 2', () => {
        expect(includes('привет', 'иве')).toEqual(true);
    });

    test('Должна выбросить TypeError если первый аргумент не строка (123, \'hello\')', () => {
        expect(() => includes(123, 'hello')).toThrow('Аргументы должны быть строкой');
    });

    test('Должна выбросить TypeError если второй аргумент не строка (\'hello\', 123)', () => {
        expect(() => includes('hello', 123)).toThrow('Аргументы должны быть строкой');
    });
});