import { describe, test, expect } from 'bun:test';
import { repeat } from "./repeat.js";

describe('Тесты repeat', () => {
    test('Должна повторить 3 раза: repeat(\'ab\', 3) → \'ababab\'', () => {
        expect(repeat('ab', 3)).toEqual('ababab');
    });
    
    test('Должна вернуть исходную строку для count = 1: repeat(\'hello\', 1) → \'hello\'', () => {
        expect(repeat('hello', 1)).toEqual('hello');
    });
    
    test('Должна вернуть \'\' для count = 0', () => {
        expect(repeat('hello', 0)).toEqual('');
    });
    
    test('Должна вернуть \'\' для пустой исходной строки: repeat(\'\', 5) → \'\'', () => {
        expect(repeat('',5)).toEqual('');
    });
    
    test('Должна повторить один символ: repeat(\'x\', 4) → \'xxxx\'', () => {
        expect(repeat('x', 4)).toEqual('xxxx');
    });

    test('Должна обрезать дробную часть: repeat(\'a\', 2.7) → \'aa\'', () => {
        expect(repeat('a', 2.7)).toEqual('aa');
    });
    

    test('Должна дать \'\' для count < 1: repeat(\'a\', 0.5) → \'\'', () => {
        expect(repeat('a', 0.5)).toEqual('');
    });

    test('Должна дать вернуть \'\' строку если count пропущен: repeat(\'a\') → \'\'', () => {
        expect(repeat('a')).toEqual('');
    });
    
    test('Должна работать с кириллицей: repeat(\'да\', 3) → \'дадада\'', () => {
        expect(repeat('да', 3)).toEqual('дадада');
    });
    
    test('Должна выбросить RangeError для отрицательного count: repeat(\'a\', -1)', () => {
        expect(() => repeat('a', -1)).toThrow(RangeError);
    });
    
    test('Должна выбросить TypeError если count не число: repeat(\'a\', \'3\')', () => {
        expect(() => repeat('a', '3')).toThrow(TypeError);
    });
    
    test('Должна выбросить TypeError если str не строка: repeat(123, 3)', () => {
        expect(() => repeat(123, 3)).toThrow(TypeError);
    });
});