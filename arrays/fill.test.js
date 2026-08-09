import { describe, test, expect } from 'bun:test';
import { fill } from './fill.js';

describe('Тесты fill', () => {

    test("Должна заполнить весь массив: fill([1, 2, 3], 0) → массив [0, 0, 0]",() => {
        const arr = [1, 2, 3];
        const result = fill(arr, 0);
        expect(result).toEqual([0, 0, 0]);
        expect(result).toBe(arr);
    });
    
    test("Должна заполнить часть от start до end: fill([1, 2, 3, 4], '*', 1, 3) → [1, '*', '*', 4]",() => {
        const arr = [1, 2, 3, 4];
        const result = fill(arr, '*', 1, 3);
        expect(result).toEqual([1, '*', '*', 4]);
        expect(result).toBe(arr);
    });
    
    test("Должна работать с пустым массивом: fill([], 5) → []",() => {
        const arr = [];
        const result = fill(arr, 5);
        expect(result).toEqual([]);
        expect(result).toBe(arr);
    });
    
    test("Должна ничего не менять если start >= end: fill([1, 2, 3], 0, 2, 1) → [1, 2, 3]",() => {
        const arr = [1, 2, 3];
        const result = fill(arr, 0, 2, 1);
        expect(result).toEqual([1, 2, 3]);
        expect(result).toBe(arr);
    });
    
    test("Должна поддерживать отрицательный start: fill([1, 2, 3, 4], '*', -2) → [1, 2, '*', '*']",() => {
        const arr = [1, 2, 3, 4];
        const result = fill(arr, '*', -2);
        expect(result).toEqual([1, 2, '*', '*']);
        expect(result).toBe(arr);
    });
    
    test("Должна поддерживать отрицательный end: fill([1, 2, 3, 4], '*', 0, -1) → ['*', '*', '*', 4]",() => {
        const arr = [1, 2, 3, 4];
        const result = fill(arr, '*', 0, -1);
        expect(result).toEqual(['*', '*', '*', 4]);
        expect(result).toBe(arr);
    });
    
    test("Должна работать с start и end по умолчанию: fill([1, 2, 3], 'a') → ['a', 'a', 'a']",() => {
        const arr = [1, 2, 3];
        const result = fill(arr, 'a');
        expect(result).toEqual(['a', 'a', 'a']);
        expect(result).toBe(arr);
    });
    
    test("Должна нормализовать start > len: fill([1, 2], 5, 5) → [1, 2] (без изменений)",() => {
        const arr = [1, 2];
        const result = fill(arr, 5, 5);
        expect(result).toEqual([1, 2]);
        expect(result).toBe(arr);
    });
    
    test("Должна нормализовать отрицательный start уходящий за границу: fill([1, 2, 3], '*', -10, 2) → ['*', '*', 3]",() => {
        const arr = [1, 2, 3];
        const result = fill(arr, '*', -10, 2);
        expect(result).toEqual(['*', '*', 3]);
        expect(result).toBe(arr);
    });
    
    test("Должна работать с NaN в start: fill([1, 2, 3], 0, NaN)", () => {
        expect(fill([1, 2, 3], 0, NaN)).toEqual([0, 0, 0]);
    });

    test("Должна работать с NaN в end: fill([1, 2, 3], 0, 1, NaN)", () => {
        expect(fill([1, 2, 3], 0, 1, NaN)).toEqual([1, 2, 3]);
    });
    
    test("Должна работать с Infinity в start: fill([1, 2, 3], 0, Infinity)", () => {
        expect(fill([1, 2, 3], 0, Infinity)).toEqual([1, 2, 3]);
    });

    test("Должна работать с Infinity в end: fill([1, 2, 3], 0, 1, Infinity)", () => {
        expect(fill([1, 2, 3], 0, 1, Infinity)).toEqual([1, 0, 0]);
    });
    
    test("Должна работать с -Infinity в start: fill([1, 2, 3], 0, -Infinity)", () => {
        expect(fill([1, 2, 3], 0, -Infinity)).toEqual([0, 0, 0]);
    });

    test("Должна работать с -Infinity в end: fill([1, 2, 3], 0, 1, -Infinity)", () => {
        expect(fill([1, 2, 3], 0, 1, -Infinity)).toEqual([1, 2, 3]);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => fill('hello', 1)).toThrow('Первый аргумент должен быть массивом');
    });
    
    test("Должна выбросить TypeError если start, end не числа", () => {
        expect(() => fill([], 1, 'a', 'b')).toThrow('Аргументы start и end должы быть числами');
    });

});
