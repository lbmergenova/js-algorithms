import { describe, test, expect } from 'bun:test';
import { lowerCase } from './lower-case.js';

describe('Тесты lowerCase', () => {

    test("Должна перевести все заглавные латинские: ('HELLO') → 'hello'", () => {
        expect(lowerCase('HELLO')).toBe('hello');
    });

    test("Должна оставить строчные без изменений: ('hello') → 'hello'", () => {
        expect(lowerCase('hello')).toBe('hello');
    });

    test("Должна работать со смешанным регистром: ('Hello World') → 'hello world'", () => {
        expect(lowerCase('Hello World')).toBe('hello world');
    });

    test("Должна не трогать пробелы: (' HELLO 123') → ' hello 123'", () => {
        expect(lowerCase(' HELLO 123')).toBe(' hello 123');
    });

    test("Должна не менять цифры: ('HELLO123') → 'hello123'", () => {
        expect(lowerCase('HELLO123')).toBe('hello123');
    });

    test("Должна не менять знаки: ('HELLO!@#') → 'hello!@#'", () => {
        expect(lowerCase('HELLO!@#')).toBe('hello!@#');
    });

    test("Должна вернуть '' для пустой строки", () => {
        expect(lowerCase('')).toBe('');
    });

    test("Должна вернуть строку без изменений если нет заглавных букв: ('123!@#') → '123!@#'", () => {
        expect(lowerCase('123!@#')).toBe('123!@#');
    });

    test("Должна перевести кириллицу: ('ПРИВЕТ') → 'привет'", () => {
        expect(lowerCase('ПРИВЕТ')).toBe('привет');
    });

    test("Должна работать со смесью латиницы и кириллицы: ('HELLO ПРИВЕТ') → 'hello привет'", () => {
        expect(lowerCase('HELLO ПРИВЕТ')).toBe('hello привет');
    });

    test("Должна не менять уже строчные буквы (включая кириллицу): ('привет') → 'привет'", () => {
        expect(lowerCase('привет')).toBe('привет');
    });

    test("Должна выбросить TypeError если аргумент не строка", () => {
        expect(() => lowerCase(123)).toThrow(TypeError);
    });
    
});
