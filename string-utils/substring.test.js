import { describe, test, expect } from 'bun:test';
import { substring } from './substring.js';

describe('Тесты substring', () => {

    test("Должна вернуть 'hello' для ('hello', 0, 5)", () => {
        expect(substring('hello', 0, 5)).toBe('hello');
    });

    test("Должна вернуть 'ell' для ('hello', 1, 4)", () => {
        expect(substring('hello', 1, 4)).toBe('ell');
    });

    test("Должна вернуть 'h' для одного символа в начале ('hello', 0, 1)", () => {
        expect(substring('hello', 0, 1)).toBe('h');
    });

    test("Должна вернуть 'e' для одного символа в середине ('hello', 2, 1)", () => {
        expect(substring('hello', 2, 1)).toBe('e');
    });

    test("Должна вернуть 'ell' для одного символа в конце ('hello', 4, 1)", () => {
        expect(substring('hello', 4, 1)).toBe('ell');
    });

    test("Должна обрезать end до длины строки: ('hello', 0, 10) → 'hello'", () => {
        expect(substring('hello', 0, 10)).toBe('hello');
    });

    test("Должна вернуть до конца строки при не указанном 3 арг.: ('hello', 2) → 'llo'", () => {
        expect(substring('hello', 2)).toBe('llo');

    });

    test("Должна поменять start и end местами если start > end: ('hello', 4, 1) → 'ell'", () => {
        expect(substring('hello', 4, 1)).toBe('ell');

    });

    test("Должна привести отрицательный start к 0: ('hello', -2, 3) → 'hel'", () => {
        expect(substring('hello', -2, 3)).toBe('hel');
    });

    test("Должна привести отрицательный start и end к 0: ('hello', -2, -3) → ''", () => {
        expect(substring('hello', -2, -3)).toBe('');
    });
    
    test("Должна привести отрицательный end к 0, но start > 0: ('hello', 3, -1) → 'hel'", () => {
        expect(substring('hello', 3, -1)).toBe('hel');
    });

    test("Должна привести NaN к 0: ('hello', NaN, 3) → 'hel'", () => {
        expect(substring('hello', NaN, 3)).toBe('hel');
    });

    test("Должна вернуть '' если start >= длины строки: ('hello', 5, 7) → ''", () => {
        expect(substring('hello', 5, 7)).toBe('');
    });

    test("Должна вернуть '' для пустой исходной строки: ('', 0, 1) → ''", () => {
        expect(substring('', 0, 1)).toBe('');
    });

    test("Должна работать с кириллицей: ('привет', 1, 4) → 'рив'", () => {
        expect(substring('привет', 1, 4)).toBe('рив');
    });
 
    test("Должна выбросить TypeError если str не строка", () => {
        expect(() => substring(123,12,12)).toThrow("Первый аргумент должен быть строкой");
    });

    test("Должна выбросить TypeError если start не указан или не число", () => {
        expect(() => substring("hello", "abc", 10)).toThrow("Второй и третий аргументы должны быть числами");
        expect(() => substring("hello")).toThrow("Второй и третий аргументы должны быть числами");
    });

    test("Должна выбросить TypeError если end не число", () => {
        expect(() => substring("hello", 1, null)).toThrow("Второй и третий аргументы должны быть числами");
    });
});
