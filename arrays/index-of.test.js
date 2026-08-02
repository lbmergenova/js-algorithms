import { describe, test, expect } from 'bun:test';
import { indexOf } from './index-of.js';

describe('Тесты indexOf', () => {
   
    test("Должна найти элемент в середине: indexOf([10, 20, 30], 20) → 1", () => {
        const arr = [10, 20, 30];
        const result = indexOf(arr, 20);
        expect(result).toBe(1);
        expect(arr).toEqual([10, 20, 30]);
    });
   
    test("Должна найти первый элемент: indexOf([10, 20, 30], 10) → 0", () => {
        const arr = [10, 20, 30];
        const result = indexOf(arr, 10);
        expect(result).toBe(0);
        expect(arr).toEqual([10, 20, 30]);
    });
   
    test("Должна найти последний элемент: indexOf([10, 20, 30], 30) → 2", () => {
        const arr = [10, 20, 30];
        const result = indexOf(arr, 30);
        expect(result).toBe(2);
        expect(arr).toEqual([10, 20, 30]);
    });
   
    test("Должна вернуть -1 если элемента нет: indexOf([10, 20, 30], 99) → -1", () => {
        const arr = [10, 20, 30];
        const result = indexOf(arr, 99);
        expect(result).toBe(-1);
        expect(arr).toEqual([10, 20, 30]);
    });
   
    test("Должна вернуть индекс первого вхождения при дубликатах: indexOf([1, 2, 1, 3], 1) → 0", () => {
        const arr = [1, 2, 1, 3];
        const result = indexOf(arr, 1);
        expect(result).toBe(0);
        expect(arr).toEqual([1, 2, 1, 3]);
    });
  
    test("Должна вернуть -1 для пустого массива: indexOf([], 1) → -1", () => {
        const arr = [];
        const result = indexOf(arr, 1);
        expect(result).toBe(-1);
        expect(arr).toEqual([]);
    });
   
    test("Должна найти строку по значению: indexOf(['a', 'b', 'c'], 'b') → 1", () => {
        const arr = ['a', 'b', 'c'];
        const result = indexOf(arr, 'b');
        expect(result).toBe(1);
        expect(arr).toEqual(['a', 'b', 'c']);
    });
    
    test("Должна корректно работать с массивом строк: indexOf(['abc', 'def', 'xyz'], 'def') → 1", () => {
        const arr = ['abc', 'def', 'xyz'];
        const result = indexOf(arr, 'def');
        expect(result).toBe(1);
        expect(arr).toEqual(['abc', 'def', 'xyz']);
    });
    
    test("Должна найти 0 (не спутать с false): indexOf([0, false], 0) → 0, indexOf([0, false], false) → 1", () => {
        const arr = [0, false];
        const result_1 = indexOf(arr, 0);
        const result_2 = indexOf(arr, false);
        expect(result_1).toBe(0);
        expect(result_2).toBe(1);
        expect(arr).toEqual([0, false]);
    });
    
    test("Должна найти false: indexOf([true, false], false) → 1", () => {
        const arr = [true, false];
        const result = indexOf(arr, false);
        expect(result).toBe(1);
        expect(arr).toEqual(arr);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => indexOf('hello', 'o')).toThrow(TypeError);
    });

});
