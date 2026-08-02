import { describe, test, expect } from 'bun:test';
import { shift } from './shift.js';

describe('Тесты shift', () => {

    test("Должна удалить первый элемент и вернуть его: shift([1, 2, 3]) → 1, массив [2, 3]", () => {
        const arr = [1, 2, 3];
        const item = shift(arr);
        expect(item).toBe(1);
        expect(arr).toEqual([2, 3]);
    });
    
    test("Должна вернуть undefined для пустого массива: shift([]) → undefined", () => {
        const arr = [];
        const item = shift(arr);
        expect(item).toBe(undefined);
        expect(arr).toEqual([]);
    });
    
    test("Должна удалить единственный элемент: shift([42]) → 42, массив стал пустым", () => {
        const arr = [42];
        const item = shift(arr);
        expect(item).toBe(42);
        expect(arr).toEqual([]);
    });
    
    test("Должна сохранить порядок остальных элементов: shift(['a', 'b', 'c']) → 'a', массив ['b', 'c']", () => {
        const arr = ['a', 'b', 'c'];
        const item = shift(arr);
        expect(item).toBe('a');
        expect(arr).toEqual(['b', 'c']);
    });
    
    test("Должна корректно удалить falsy значение (не спутать с undefined): shift([0, 1]) → 0", () => {
        const arr = [0, 1];
        const item = shift(arr);
        expect(item).toBe(0);
        expect(arr).toEqual([1]);
    });
    
    test("Два shift подряд уменьшают длину на 2", () => {
        const arr = [1 , 2, 3];
        const item_1 = shift(arr);
        const item_2 = shift(arr);
        expect(item_1).toBe(1);
        expect(item_2).toBe(2);
        expect(arr).toEqual([3]);
    });
    
    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => shift('hello')).toThrow(TypeError);
    });

});
