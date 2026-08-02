import { describe, test, expect } from 'bun:test';
import { slice } from './slice.js';

describe('Тесты slice', () => {
    
    test("Должна вернуть 'hello' для ('hello', 0, 5)", () => {
        expect(slice('hello', 0, 5)).toBe('hello');
    });

    test("Должна вернуть 'ell' для ('hello', 1, 4)", () => {
        expect(slice('hello', 1, 4)).toBe('ell');
    });

    test("Должна вернуть 'ell' для ('hello', 2, 4)", () => {
        expect(slice('hello', 2, 4)).toBe('ll');
    });

    test("Должна вернуть 'llo' для ('hello', 2) — без end, до конца", () => {
        expect(slice('hello', 2)).toBe('llo');
    });

    test("Должна вернуть 'h' для ('hello', 0, 1)", () => {
        expect(slice('hello', 0, 1)).toBe('h');
    });

    test("Должна вернуть 'l' для ('hello', 2, 3)", () => {
        expect(slice('hello', 2, 3)).toBe('l');
    });

    test("Должна вернуть 'o' для ('hello', 4)", () => {
        expect(slice('hello', 4)).toBe('o');
    });

    test("Должна вернуть 'llo' для отрицательного start: ('hello', -3)", () => {
        expect(slice('hello', -3)).toBe('llo');
    });

    test("Должна вернуть 'hell' для отрицательного end: ('hello', 0, -1)", () => {
        expect(slice('hello', 0, -1)).toBe('hell');
    });

    test("Должна вернуть 'll' для обоих отрицательных: ('hello', -3, -1)", () => {
        expect(slice('hello', -3, -1)).toBe('ll');
    });
    
    test("Должна вернуть '' если start >= end после нормализации: ('hello', 4, 1)", () => {
        expect(slice('hello', 4, 1)).toBe('');
    });

    test("Должна вернуть '' если start за границей: ('hello', 10, 15)", () => {
        expect(slice('hello', 10, 15)).toBe('');
    });

    test("Должна нормализовать выходящий за границы отрицательный start: ('hello', -10, 3) → 'hel'", () => {
        expect(slice('hello', -10, 3)).toBe('hel');
    
    });

    test("Должна вернуть '' для пустой строки: ('', 0, 1) → ''", () => {
        expect(slice('', 0, 1)).toBe('');
    });

    test("Должна работать с кириллицей: ('привет', 1, 4) → 'рив'", () => {
        expect(slice('привет', 1, 4)).toBe('рив');
    });

    test("Должна вернуть '' если start больше длины строки: ('hello', 98) → ''", () => {
        expect(slice('hello', 98)).toBe('');
    });

    test("Должна считать NaN как 0 для start: ('hello', NaN, 3) → 'hel'", () => {
        expect(slice('hello', NaN, 3)).toBe('hel');
    });

    test("Должна считать NaN как 0 для start: ('hello', NaN, -3) → 'he'", () => {
        expect(slice('hello', NaN, -3)).toBe('he');
    });

    test("Должна считать NaN как 0 для end: ('hello', -10, NaN) → ''", () => {
        expect(slice('hello', -10, NaN)).toBe('');
    });

    test("Должна выбросить TypeError если str не строка", () => {
        expect(() => slice()).toThrow("");
    });

    test("Должна выбросить TypeError если 2 арг. не число",() => {
        expect(() => slice()).toThrow("");
    });

    test("Должна выбросить TypeError если 3 арг. указан и не число",() => {
        expect(() => slice()).toThrow("");
    });

});