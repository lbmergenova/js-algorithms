import { describe, test, expect } from 'bun:test';
import { slice } from './slice.js';

describe('Тесты slice', () => {

    test("Должна скопировать весь массив: slice([1, 2, 3], 0, 3) → [1, 2, 3]", () => {
        const arr = [1, 2, 3];
        const result = slice(arr, 0, 3);
        expect(result).toEqual([1, 2, 3]);
        expect(result).not.toBe(arr);
        expect(arr).toEqual([1, 2, 3]);
    });
    test("Должна скопировать часть с середины: slice([1, 2, 3, 4], 1, 3) → [2, 3]", () => {
        const arr = [1, 2, 3, 4];
        const result = slice(arr, 1, 3);
        expect(result).toEqual([2, 3]);
        expect(arr).toEqual([1, 2, 3, 4]);
    });
    test("Должна скопировать от start до конца без end: slice([1, 2, 3, 4], 2) → [3, 4]", () => {
        const arr = [1, 2, 3, 4];
        const result = slice(arr, 2);
        expect(result).toEqual([3, 4]);
        expect(arr).toEqual([1, 2, 3, 4]);
    });
    test("Должна поддерживать отрицательный start: slice([1, 2, 3, 4], -2) → [3, 4]", () => {
        const arr = [1, 2, 3, 4];
        const result = slice(arr, -2);
        expect(result).toEqual([3, 4]);
        expect(arr).toEqual([1, 2, 3, 4]);
    });
    test("Должна поддерживать отрицательный end: slice([1, 2, 3, 4], 0, -1) → [1, 2, 3]", () => {
        const arr = [1, 2, 3, 4];
        const result = slice(arr, 0, -1);
        expect(result).toEqual([1, 2, 3]);
        expect(arr).toEqual([1, 2, 3, 4]);
    });
    test("Должна работать с обоими отрицательными: slice([1, 2, 3, 4], -3, -1) → [2, 3]", () => {
        const arr = [1, 2, 3, 4];
        const result = slice(arr, -3, -1);
        expect(result).toEqual([2, 3]);
        expect(arr).toEqual([1, 2, 3, 4]);
    });
    test("Должна вернуть пустой массив если start >= end: slice([1, 2, 3], 2, 2) → []", () => {
        const arr = [1, 2, 3];
        const result = slice(arr, 2, 2);
        expect(result).toEqual([]);
        expect(arr).toEqual([1, 2, 3]);
    });
    test("Должна вернуть пустой массив для пустого исходного: slice([], 0, 1) → []", () => {
        const arr = [];
        const result = slice(arr, 0, 1);
        expect(result).toEqual([]);
        expect(result).not.toBe(arr);
        expect(arr).toEqual([]);
    });
    test("Должна нормализовать выходящий за границы start: slice([1, 2, 3], 5, 7) → []", () => {
        const arr = [1, 2, 3];
        const result = slice(arr, 5, 7);
        expect(result).toEqual([]);
        expect(arr).toEqual([1, 2, 3]);
    });
    test("Должна нормализовать уходящий за границы отрицательный start: slice([1, 2, 3], -10, 2) → [1, 2]", () => {
        const arr = [1, 2, 3];
        const result = slice(arr, -10, 2);
        expect(result).toEqual([1, 2]);
        expect(arr).toEqual([1, 2, 3]);
    });
    test("Должна работать с массивом строк", () => {
        const arr = ['hello', 'world', '!'];
        const result = slice(arr, 0, 1);
        expect(result).toEqual(['hello']);
        expect(arr).toEqual(['hello', 'world', '!']);
    });
    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => slice('hello', 1)).toThrow('Первый аргумент должен быть массивом');
    });    
    test("Должна выбросить TypeError если start или end не число", () => {
        expect(() => slice([], '1', 2)).toThrow('Аргументы start и end должы быть числами');
        expect(() => slice([], 1, '2')).toThrow('Аргументы start и end должы быть числами');
    });
});
