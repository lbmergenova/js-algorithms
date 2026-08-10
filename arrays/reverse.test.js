import { describe, test, expect } from 'bun:test';
import { reverse } from './reverse.js';

describe('Тесты reverse', () => {

    test("Должна перевернуть массив из нечет. элементов: reverse([1, 2, 3]) → [3, 2, 1]", () => {
        const arr = [1, 2, 3];
        const result = reverse(arr);
        expect(result).toEqual([3, 2, 1]);
        expect(result).toBe(arr);
    });
    
    test("Должна перевернуть массив из чет. элементов: reverse([1, 2, 3, 4]) → [4, 3, 2, 1]", () => {
        const arr = [1, 2, 3, 4];
        const result = reverse(arr);
        expect(result).toEqual([4, 3, 2, 1]);
        expect(result).toBe(arr);
    });
    
    test("Должна перевернуть массив из одного элемента: reverse([42]) → [42]", () => {
        const arr = [42];
        const result = reverse(arr);
        expect(result).toEqual([42]);
        expect(result).toBe(arr);
    });
    
    test("Должна вернуть пустой массив без изменений: reverse([]) → []", () => {
        const arr = [];
        const result = reverse(arr);
        expect(result).toEqual([]);
        expect(result).toBe(arr);
    });
    
    test("Должна работать с массивом строк: reverse(['a', 'b', 'c']) → ['c', 'b', 'a']", () => {
        const arr = ['a', 'b', 'c'];
        const result = reverse(arr);
        expect(result).toEqual(['c', 'b', 'a']);
        expect(result).toBe(arr);
    });
    
    test("Должна работать с массивом смешанных типов: reverse([1, 'two', null]) → [null, 'two', 1]", () => {
        const arr = [1, 'two', null];
        const result = reverse(arr);
        expect(result).toEqual([null, 'two', 1]);
        expect(result).toBe(arr);
    });
    
    test("Двойной reverse должен вернуть исходный порядок: reverse(reverse([1, 2, 3])) — но учти, что reverse мутирует и возвращает тот же массив, так что два вызова подряд на одном массиве вернут то же самое. Проверь на копии.", () => {
        const arr = [1, 2, 3];
        const result = reverse(reverse(arr));
        expect(result).toEqual([1, 2, 3]);
        expect(result).toBe(arr);
    });
    
    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => reverse('hello')).toThrow(TypeError);
    });
    
});
