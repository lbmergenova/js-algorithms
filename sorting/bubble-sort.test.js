import { describe, test, expect } from 'bun:test';
import { bubbleSort } from './bubble-sort.js';

describe('Тесты bubbleSort', () => {
    
    test("Пустой массив: bubbleSort([]) → []", () => {
        const arr = [];
        const result = bubbleSort(arr);
        expect(result).toEqual([]);
        expect(result).not.toBe(arr);

    });

    test("Один элемент: bubbleSort([7]) → [7]", () => {
        const arr = [7];
        const result = bubbleSort(arr);
        expect(result).toEqual([7]);
        expect(result).not.toBe(arr);

    });

    test("Уже отсортированный: bubbleSort([1, 2, 3]) → [1, 2, 3]", () => {
        const arr = [1, 2, 3];
        const result = bubbleSort(arr);
        expect(result).toEqual([1, 2, 3]);
        expect(result).not.toBe(arr);


    });

    test("Обратный порядок: bubbleSort([3, 2, 1]) → [1, 2, 3]", () => {
        const arr = [3, 2, 1];
        const result = bubbleSort(arr);
        expect(result).toEqual([1, 2, 3]);

    });

    test("С дубликатами: bubbleSort([4, 2, 4, 1]) → [1, 2, 4, 4]", () => {
        const arr = [4, 2, 4, 1];
        const result = bubbleSort(arr);
        expect(result).toEqual([1, 2, 4, 4]);

    });

    test("Иммутабельность: после вызова исходный массив не изменился", () => {
        const arr = [4, 2, 4, 1];
        const result = bubbleSort(arr);
        expect(arr).toEqual([4, 2, 4, 1])

    });

    test("bubbleSort('abc') → TypeError", () => {
        expect(() => bubbleSort(123)).toThrow(TypeError)
    });
});