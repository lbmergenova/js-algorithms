import { describe, test, expect } from 'bun:test';
import { selectionSort } from './selection-sort.js';

describe('Тесты selectionSort', () => {
    
    test("Пустой массив: selectionSort([]) → []", () => {
        const arr = [];
        const result = selectionSort(arr);
        expect(result).toEqual([]);
        expect(result).not.toBe(arr);

    });

    test("Один элемент: selectionSort([7]) → [7]", () => {
        const arr = [7];
        const result = selectionSort(arr);
        expect(result).toEqual([7]);
        expect(result).not.toBe(arr);

    });

    test("Уже отсортированный: selectionSort([1, 2, 3]) → [1, 2, 3]", () => {
        const arr = [1, 2, 3];
        const result = selectionSort(arr);
        expect(result).toEqual([1, 2, 3]);
        expect(result).not.toBe(arr);


    });

    test("Обратный порядок: selectionSort([3, 2, 1]) → [1, 2, 3]", () => {
        const arr = [3, 2, 1];
        const result = selectionSort(arr);
        expect(result).toEqual([1, 2, 3]);

    });

    test("С дубликатами: selectionSort([4, 2, 4, 1]) → [1, 2, 4, 4]", () => {
        const arr = [4, 2, 4, 1];
        const result = selectionSort(arr);
        expect(result).toEqual([1, 2, 4, 4]);

    });

    test("Иммутабельность: после вызова исходный массив не изменился", () => {
        const arr = [4, 2, 4, 1];
        const result = selectionSort(arr);
        expect(arr).toEqual([4, 2, 4, 1])

    });

    test("selectionSort('abc') → TypeError", () => {
        expect(() => selectionSort(123)).toThrow(TypeError)
    });

});
