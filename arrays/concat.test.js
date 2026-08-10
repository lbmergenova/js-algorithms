import { describe, test, expect } from 'bun:test';
import { concat } from './concat.js';

describe('Тесты concat', () => {

    test("Должна объединить два непустых массива: concat([1, 2], [3, 4]) → [1, 2, 3, 4]", () => {
        const arr1 = [1, 2];
        const arr2 = [3, 4];
        const result = concat(arr1, arr2);
        expect(result).toEqual([1, 2, 3, 4]);
        expect(arr1).toEqual([1, 2]);
        expect(arr2).toEqual([3, 4]);
    });

    test("Должна вернуть копию первого если второй пуст: concat([1, 2], []) → [1, 2]", () => {
        const arr1 = [1, 2];
        const arr2 = [];
        const result = concat(arr1, arr2);
        expect(result).toEqual([1, 2]);
        expect(result).not.toBe(arr1);
    });

    test("Должна вернуть копию второго если первый пуст: concat([], [3, 4]) → [3, 4]", () => {
        const arr1 = [];
        const arr2 = [3, 4];
        const result = concat(arr1, arr2);
        expect(result).toEqual([3, 4]);
        expect(result).not.toBe(arr2);
    });

    test("Должна вернуть пустой массив для двух пустых: concat([], []) → []", () => {
        const arr1 = [];
        const arr2 = [];
        const result = concat(arr1, arr2);
        expect(result).toEqual([]);
        expect(result).not.toBe(arr1);
        expect(result).not.toBe(arr2);
    });

    test("Должна работать с массивами строк: concat(['a'], ['b', 'c']) → ['a', 'b', 'c']", () => {
        const arr1 = ['a'];
        const arr2 = ['b', 'c'];
        const result = concat(arr1, arr2);
        expect(result).toEqual(['a', 'b', 'c']);
        expect(arr1).toEqual(['a']);
        expect(arr2).toEqual(['b', 'c']);
    });

    test("Должна работать с массивами смешанных типов", () => {
        const arr1 = [1, 2, 3];
        const arr2 = ['a', 'b', 'c'];
        const result = concat(arr1, arr2);
        expect(result).toEqual([1, 2, 3, 'a', 'b', 'c']);
    });

    test("Должна выбросить TypeError если arr1 или arr2 не массивs", () => {
        expect(() => concat('hello', [])).toThrow(TypeError);
        expect(() => concat([], 'hello')).toThrow(TypeError);
    });
    
});
