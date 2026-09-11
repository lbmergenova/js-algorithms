import { describe, test, expect } from 'bun:test';
import { insertionSort } from './insertion-sort.js';

describe('Тесты insertionSort', () => {
    
    test("Пустой массив: insertionSort([]) → []", () => {
        const arr = [];
        const result = insertionSort(arr);
        expect(result).toEqual([]);
        expect(result).not.toBe(arr);

    });

    test("Один элемент: insertionSort([7]) → [7]", () => {
        const arr = [7];
        const result = insertionSort(arr);
        expect(result).toEqual([7]);
        expect(result).not.toBe(arr);

    });

    test("Уже отсортированный: insertionSort([1, 2, 3]) → [1, 2, 3]", () => {
        const arr = [1, 2, 3];
        const result = insertionSort(arr);
        expect(result).toEqual([1, 2, 3]);
        expect(result).not.toBe(arr);


    });

    test("Обратный порядок: insertionSort([3, 2, 1]) → [1, 2, 3]", () => {
        const arr = [3, 2, 1];
        const result = insertionSort(arr);
        expect(result).toEqual([1, 2, 3]);

    });

    test("С дубликатами: insertionSort([4, 2, 4, 1]) → [1, 2, 4, 4]", () => {
        const arr = [4, 2, 4, 1];
        const result = insertionSort(arr);
        expect(result).toEqual([1, 2, 4, 4]);

    });

    test("Иммутабельность: после вызова исходный массив не изменился", () => {
        const arr = [4, 2, 4, 1];
        const result = insertionSort(arr);
        expect(arr).toEqual([4, 2, 4, 1])

    });

    test("insertionSort('abc') → TypeError", () => {
        expect(() => insertionSort(123)).toThrow(TypeError)
    });
});
