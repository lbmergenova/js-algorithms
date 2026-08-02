import { describe, test, expect } from 'bun:test';
import { upperCase } from './upper-case.js';

describe('Тесты upperCase', () => {

    test("Должна перевести все строчные латинские: ('hello') → 'HELLO'", () => {
        expect(upperCase('hello')).toBe('HELLO');
    });

    test("Должна оставить заглавные без изменений: ('HELLO') → 'HELLO'", () => {
        expect(upperCase('HELLO')).toBe('HELLO');
    });

    test("Должна работать со смешанным регистром: ('Hello World') → 'HELLO WORLD'", () => {
        expect(upperCase('Hello World') ).toBe('HELLO WORLD');
    });

    test("Должна не трогать пробелы: (' hello 123') → ' HELLO 123'", () => {
        expect(upperCase(' hello 123')).toBe(' HELLO 123');
    });

    test("Должна не менять цифры: ('hello123') → 'HELLO123'", () => {
        expect(upperCase('hello123') ).toBe('HELLO123');
    });

    test("Должна не менять знаки: ('hello!@#') → 'HELLO!@#'", () => {
        expect(upperCase('hello!@#')).toBe('HELLO!@#');
    });

    test("Должна вернуть '' для пустой строки", () => {
        expect(upperCase('')).toBe('');
    });

    test("Должна вернуть строку без изменений если нет строчных букв: ('123!@#') → '123!@#'", () => {
        expect(upperCase('123!@#')).toBe('123!@#');
    });

    test("Должна перевести кириллицу: ('привет') → 'ПРИВЕТ'", () => {
        expect(upperCase('привет')).toBe('ПРИВЕТ');
    });

    test("Должна работать со смесью латиницы и кириллицы: ('hello привет') → 'HELLO ПРИВЕТ'", () => {
        expect(upperCase('hello привет')).toBe('HELLO ПРИВЕТ');
    });

    test("Должна не менять уже заглавные буквы (включая кириллицу): ('ПРИВЕТ') → 'ПРИВЕТ'", () => {
        expect(upperCase('ПРИВЕТ')).toBe('ПРИВЕТ');
    });

    test("Должна выбросить TypeError если аргумент не строка", () => {
        expect(() => upperCase(123)).toThrow(TypeError);
    });

});
