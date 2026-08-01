import { describe, test, expect } from 'bun:test';
import { pop } from './pop.js';
import { len } from './len.js';

describe('Тесты pop', () => {
    
    test("Должна удалить последний элемент и вернуть его: pop([1, 2, 3]) → 3, массив стал [1, 2]", () => {
        const arr = [1, 2, 3];
        const item = pop(arr);
        expect(item).toBe(3);
        expect(arr).toEqual([1, 2]);
    });
    
    test("Должна вернуть undefined для пустого массива: pop([]) → undefined", () => {
        const arr = [];
        const item = pop(arr);
        expect(item).toBe(undefined);
        expect(arr).toEqual([]);
    });
    
    test("Должна удалить единственный элемент: pop([42]) → 42, массив стал пустым (len === 0)", () => {
        const arr = [42];
        const item = pop(arr);
        expect(item).toBe(42);
        expect(len(arr)).toBe(0);
        expect(arr).toEqual([]);
    });
    
    test("Должна работать с массивом строк: pop(['a', 'b']) → 'b'", () => {
        const arr = ['a', 'b'];
        const item = pop(arr);
        expect(item).toBe('b');
        expect(arr).toEqual(['a']);
    });
    
    test("Должна корректно удалить 0 (не спутать с undefined): pop([0]) → 0", () => {
        const arr = [0];
        const item = pop(arr);
        expect(item).toBe(0);
        expect(arr).toEqual([]);
    });
    
    test("Должна корректно удалить false (не спутать с undefined): pop([false]) → false", () => {
        const arr = [false];
        const item = pop(arr);
        expect(item).toBe(false);
        expect(arr).toEqual([]);
    });
    
    test("После двух pop подряд длина уменьшается на 2", () => {
        const arr = [1, 2, 3, 4, 5];
        const item_1 = pop(arr);
        const item_2 = pop(arr);
        expect(item_1).toBe(5);
        expect(item_2).toBe(4);
        expect(len(arr)).toBe(3);
        expect(arr).toEqual([1, 2, 3]);
    });
    
    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => pop('hello')).toThrow(TypeError);
    });

});
