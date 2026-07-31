import { describe, test, expect } from 'bun:test';
import { pad } from './pad.js';

describe('Тесты pad', () => {

    test("Должна дополнить слева: ('hi', 5, '-', 'left') → '---hi'", () => {
        expect(pad('hi', 5, '-', 'left')).toBe('---hi');
    });
    
    test("Должна дополнить справа: ('hi', 5, '-', 'right') → 'hi---'", () => {
        expect(pad('hi', 5, '-', 'right')).toBe('hi---');
    });
    
    test("Должна дополнить с обеих сторон (чётное): ('hi', 6, '-', 'both') → '--hi--'", () => {
        expect(pad('hi', 6, '-', 'both')).toBe('--hi--');
    });
    
    test("Должна дополнить с обеих сторон (нечётное, лишний справа): ('hi', 5, '-', 'both') → '-hi--'", () => {
        expect(pad('hi', 5, '-', 'both')).toBe('-hi--');
    });
    
    test("Должна вернуть строку без изменений если длина уже достаточная: ('hello', 5, '-', 'left') → 'hello'", () => {
        expect(pad('hello', 5, '-', 'left')).toBe('hello');
    });
    
    test("Должна вернуть строку без изменений если она длиннее целевой: ('hello', 3, '-', 'left') → 'hello'", () => {
        expect(pad('hello', 3, '-', 'left')).toBe('hello');
    });
    
    test("Должна работать с пробелами: ('a', 3, ' ', 'right') → 'a  '", () => {
        expect(pad('a', 3, ' ', 'right')).toBe('a  ');
    });
    
    test("Должна работать с пустой исходной строкой: ('', 4, 'x', 'both') → 'xxxx'", () => {
        expect(pad('', 4, 'x', 'both')).toBe('xxxx');
    });
    
    test("Должна вернуть '' для pad('', 0, '-', 'left')", () => {
        expect(pad('', 0, '-', 'left')).toBe('');
    });
    
    test("Должна дополнить многосимвольной строкой слева: ('hi', 7, 'ab', 'left') → 'ababahi' (padding=5, 'ab' повторяется и обрезается)", () => {
        expect(pad('hi', 7, 'ab', 'left')).toBe('ababahi');
    });
    
    test("Должна дополнить многосимвольной строкой справа: ('hi', 7, 'ab', 'right') → 'hiababa'", () => {
        expect(pad('hi', 7, 'ab', 'right')).toBe('hiababa');
    });
    
    test("Должна дополнить многосимвольной строкой с обеих сторон: ('!', 10, 'abc', 'both') → 'abca!abcab'", () => {
        expect(pad('!', 10, 'abc', 'both')).toBe('abca!abcab');
    });
    
    test("Должна дополнить многосимвольной строкой с обеих сторон: ('!', 10, 'ab', 'both') → 'abab!ababa'", () => {
        expect(pad('!', 10, 'ab', 'both')).toBe('abab!ababa');
    });

    test("Должна выбросить ошибку при неверном side: ('a', 3, '-', 'top')", () => {
        expect(() => pad('a', 3, '-', 'top')).toThrow(RangeError);
    });

    test("Должна выбросить TypeError если первый аргумент не строка", () => {
        expect(() => pad(123, 2, 'a', 'right')).toThrow('Первый аргумент должен быть строкой');
    });

    test("Должна выбросить TypeError если второй аргумент не число", () => {
        expect(() => pad('hi', 'a', 'a', 'right')).toThrow('Второй аргумент должен быть числом');
    });

    test("Должна выбросить TypeError если третий аргумент не строка", () => {
        expect(() => pad('hi', 10, 123, 'right')).toThrow('Третий аргумент должен быть строкой');
    });

});
