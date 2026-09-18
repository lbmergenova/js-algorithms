import { describe, test, expect } from 'bun:test';
import { quickSort } from './quick-sort.js';

describe('Тесты quickSort', () => {
    
    test("Пустой массив: quickSort([]) → []", () => {
        const arr = [];
        const result = quickSort(arr);
        expect(result).toEqual([]);
        expect(result).not.toBe(arr);

    });

    test("Один элемент: quickSort([7]) → [7]", () => {
        const arr = [7];
        const result = quickSort(arr);
        expect(result).toEqual([7]);
        expect(result).not.toBe(arr);

    });

    test("Уже отсортированный: quickSort([1, 2, 3]) → [1, 2, 3]", () => {
        const arr = [1, 2, 3];
        const result = quickSort(arr);
        expect(result).toEqual([1, 2, 3]);
        expect(result).not.toBe(arr);


    });

    test("Обратный порядок: quickSort([3, 2, 1]) → [1, 2, 3]", () => {
        const arr = [3, 2, 1];
        const result = quickSort(arr);
        expect(result).toEqual([1, 2, 3]);

    });

    test("С дубликатами: quickSort([4, 2, 4, 1]) → [1, 2, 4, 4]", () => {
        const arr = [4, 2, 4, 1];
        const result = quickSort(arr);
        expect(result).toEqual([1, 2, 4, 4]);

    });

    test("Иммутабельность: после вызова исходный массив не изменился", () => {
        const arr = [4, 2, 4, 1];
        const result = quickSort(arr);
        expect(arr).toEqual([4, 2, 4, 1])

    });

    test("quickSort('abc') → TypeError", () => {
        expect(() => quickSort(123)).toThrow(TypeError)
    });

});
