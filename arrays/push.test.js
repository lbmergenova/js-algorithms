import { describe, test, expect } from 'bun:test';
import { push } from './push.js';
import { len } from './len.js';

describe('Тесты push', () => {
    
    test("Должна добавить элемент в конец и вернуть новую длину: push([1, 2], 3) → 3, массив [1, 2, 3]", () => {
        const arr = [1, 2];
        const result = push(arr, 3);
        expect(result).toBe(3);
        expect(arr).toEqual([1, 2, 3]);
    });
    
    test("Должна работать с пустым массивом: push([], 'a') → 1, массив ['a']", () => {
        const arr = [];
        const result = push(arr, 'a');
        expect(result).toBe(1);
        expect(arr).toEqual(['a']);
    });
    
    test("Должна добавить несколько элементов по очереди (два push подряд в один массив)", () => {
        const arr = [];
        const result_1 = push(arr, 1);
        const result_2 = push(arr, 2);
        expect(result_1).toBe(1);
        expect(result_2).toBe(2);
        expect(arr).toEqual([1, 2]);
    });
    
    test("Должна добавить элемент в массив из одного элемента: push([10], 20) → 2, массив [10, 20]", () => {
        const arr = [10];
        const result = push(arr, 20);
        expect(result).toBe(2);
        expect(arr).toEqual([10, 20]);
    });
    
    test("Должна добавить 0, false, null как полноценные элементы (проверь, что len их учитывает)", () => {
        const arr = [];
        push(arr, 0);
        push(arr, false);
        const result = push(arr, null);
        expect(result).toBe(3);
        expect(len(arr)).toBe(3);
        expect(arr).toEqual([0, false, null]);
    });
    
    test("Должна добавить объект как элемент: push([], {a: 1}) → 1", () => {
        const arr = [];
        const obj = {a: 1};
        const result = push(arr, obj);
        expect(result).toBe(1);
        expect(arr).toEqual([obj]);
    });
    
    test("Исходный массив изменился — проверь arr[len-1] после вызова", () => {
        const arr = [];
        const result = push(arr, 'hello');
        expect(result).toBe(1);
        expect(arr[0]).toBe('hello');
        expect(arr).toEqual(['hello']);
    });
    
    test("Должна выбросить TypeError если arr не массив (push('hello', 1))", () => {
        expect(() => push('hello'), 1).toThrow(TypeError);
    });

});
