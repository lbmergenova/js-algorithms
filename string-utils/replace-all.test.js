import { describe, test, expect } from 'bun:test';
import { replaceAll } from './replace-all.js';

describe('Тесты replaceAll', () => {
  
    test("Должна заменить одно вхождение: ('hello', 'll', 'LL') → 'heLLo'", () => {
        expect(replaceAll('hello', 'll', 'LL')).toBe('heLLo');
    });

    test("Должна заменить несколько вхождений: ('banana', 'na', 'NA') → 'baNANA'", () => {
        expect(replaceAll('banana', 'na', 'NA')).toBe('baNANA');
    });

    test("Должна не учитывать подставленную строку: ('aaa', 'aa', 'ba') → 'baa'", () => {
        expect(replaceAll('aaa', 'aa', 'ba')).toBe('baa');
    });

    test("Должна вернуть исходную строку если search не найден: ('hello', 'eli', 'hhh') → 'hello'", () => {
        expect(replaceAll('hello', 'eli', 'hhh')).toBe('hello');
    });

    test("Должна работать с заменой символе на строку: ('a', 'a', 'hello') → 'hello'", () => {
        expect(replaceAll('a', 'a', 'hello')).toBe('hello');
    });

    test("Должна работать с заменой на более длинную: ('hi', 'i', 'ello') → 'hello'", () => {
        expect(replaceAll('hi', 'i', 'ello')).toBe('hello');
    });

    test("Должна работать с заменой на пустую строку: ('hello', 'l', '') → 'heo'", () => {
        expect(replaceAll('hello', 'l', '')).toBe('heo');
    });

    test("Должна вернуть '' для пустой исходной строки: ('', 'abc', 'X') → ''", () => {
        expect(replaceAll('', 'abc', 'X')).toBe('');
    });

    test("Должна вставить replacement вокруг каждого символа при пустом search: ('abc', '', 'X') → 'XaXbXcX'", () => {
        expect(replaceAll('abc', '', 'X')).toBe('XaXbXcX');
    });
    
    test("Должна выбросить TypeError если любой аргумент не строка", () => {
        expect(() => replaceAll(123, 'na', 'ba')).toThrow(TypeError);
        expect(() => replaceAll('banana', 123, 'ba')).toThrow(TypeError);
        expect(() => replaceAll('banana', 'na', 123)).toThrow(TypeError);
    });

});
