import { describe, test, expect } from 'bun:test';
import { lastIndexOf } from './last-index-of.js';

describe('Тесты lastIndexOf', () => {
    
    test("Должна вернуть индекс последнего вхождения при дубликатах: lastIndexOf([1, 2, 1, 3], 1) → 2", () => {
        const arr = [1, 2, 1, 3];
        const result = lastIndexOf(arr, 1);
        expect(result).toBe(2);
        expect(arr).toEqual([1, 2, 1, 3]);
    });

    test("Должна вернуть -1 если элемента нет: lastIndexOf([1, 2, 3], 9) → -1", () => {
        const arr = [1, 2, 3];
        const result = lastIndexOf(arr, 9);
        expect(result).toBe(-1);
        expect(arr).toEqual([1, 2, 3]);
    });

    test("Должна вернуть 0 для единственного вхождения в начале: lastIndexOf([5, 6, 7], 5) → 0", () => {
        const arr = [5, 6, 7];
        const result = lastIndexOf(arr, 5);
        expect(result).toBe(0);
        expect(arr).toEqual([5, 6, 7]);
    });

    test("Должна вернуть последний индекс для элемента в конце: lastIndexOf([5, 6, 7], 7) → 2", () => {
        const arr = [5, 6, 7];
        const result = lastIndexOf(arr, 7);
        expect(result).toBe(2);
        expect(arr).toEqual([5, 6, 7]);
    });
   
    test("Должна вернуть -1 для пустого массива: lastIndexOf([], 1) → -1", () => {
        const arr = [];
        const result = lastIndexOf(arr, 1);
        expect(result).toBe(-1);
        expect(arr).toEqual([]);
    });
   
    test("Должна найти символ: lastIndexOf(['a', 'b', 'a'], 'a') → 2", () => {
        const arr = ['a', 'b', 'a'];
        const result = lastIndexOf(arr, 'a');
        expect(result).toBe(2);
        expect(arr).toEqual(['a', 'b', 'a']);
    });
   
    test("Должна найти строку: lastIndexOf(['ab', 'cd', 'ab'], 'ab') → 2", () => {
        const arr = ['ab', 'cd', 'ab'];
        const result = lastIndexOf(arr, 'ab');
        expect(result).toBe(2);
        expect(arr).toEqual(['ab', 'cd', 'ab']);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => lastIndexOf('hello', 'l')).toThrow(TypeError);
    });

});
