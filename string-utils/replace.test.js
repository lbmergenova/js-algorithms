import { describe, test, expect } from 'bun:test';
import { replace } from './replace.js';

describe('Тесты replace', () => {

    test("Должна заменить 'world' на 'everyone': ('hello world', 'world', 'everyone') → 'hello everyone'", () => {
        expect(replace('hello world', 'world', 'everyone')).toBe('hello everyone');
    });

    test("Должна заменить в начале: ('hello world', 'hello', 'hi') → 'hi world'", () => {
        expect(replace('hello world', 'hello', 'hi')).toBe('hi world');
    });

    test("Должна заменить в конце: ('hello world', 'world', 'earth') → 'hello earth'", () => {
        expect(replace('hello world', 'world', 'earth')).toBe('hello earth');
    });

    test("Должна заменить в середине: ('hello world', 'ello', 'i') → 'hi world'", () => {
        expect(replace('hello world', 'ello', 'i')).toBe('hi world');
    });

    test("Должна вернуть исходную строку если search не найден: ('hello', 'help', 'hhhh') → 'hello'", () => {
        expect(replace('hello', 'help', 'hhhh')).toBe('hello');
    });

    test("Должна работать с заменой на более длинную: ('hi', 'i', 'ello') → 'hello'", () => {
        expect(replace('hello', 'help', 'hhhh')).toBe('hello');
    });

    test("Должна работать с заменой на более короткую: ('hello', 'ello', 'i') → 'hi'", () => {
        expect(replace('hello', 'ello', 'i')).toBe('hi');
    });

    test("Должна работать с заменой на пустую строку: ('hello', 'll', '') → 'heo'", () => {
        expect(replace('hello', 'll', '')).toBe('heo');
    });

    test("Должна заменить только первое вхождение при множественных: ('banana', 'na', 'ba') → 'babana'", () => {
        expect(replace('banana', 'na', 'ba')).toBe('babana');
    });

    test("Должна работать с кириллицей: ('привет мир', 'мир', 'всем') → 'привет всем'", () => {
        expect(replace('привет мир', 'мир', 'всем')).toBe('привет всем');
    });

    test("Длжна выбросить TypeError если любой аргумент не строка", () => {
        expect(() => replace(123, 'na', 'ba')).toThrow(TypeError);
        expect(() => replace('banana', 123, 'ba')).toThrow(TypeError);
        expect(() => replace('banana', 'na', 123)).toThrow(TypeError);
    });
    
});
