import { describe, test, expect } from 'bun:test';
import { reverse } from './reverse.js';

describe('Тесты reverse', () => {
    test('Должна перевернуть строку: reverse(\'hello\') → \'olleh\'', () => {
        expect(reverse('hello')).toBe('olleh');
    });

    test('Должна вернуть \'\' для пустой строки', () => {
        expect(reverse('')).toBe('');
    });

    test('Должна вернуть \'a\' для строки из одного символа', () => {
        expect(reverse('a')).toBe('a');
    });

    test('Должна вернуть ту же строку для палиндрома: reverse(\'racecar\') → \'racecar\'', () => {
        expect(reverse('racecar')).toBe('racecar');
    });

    test('Должна перевернуть строку с пробелами: reverse(\'a b c\') → \'c b a\'', () => {
        expect(reverse('a b c')).toBe('c b a');
    });

    test('Должна работать с кириллицей: reverse(\'привет\') → \'тевирп\'', () => {
        expect(reverse('привет')).toBe('тевирп');
    });
    
    test('Должна выбросить TypeError если аргумент не строка (123)', () => {
        expect(() => reverse(123)).toThrow(TypeError);
    });

    test('Должна выбросить TypeError если аргумент null', () => {
        expect(() => reverse(null)).toThrow(TypeError);
    });
});