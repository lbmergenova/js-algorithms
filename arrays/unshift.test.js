import { describe, test, expect } from 'bun:test';
import { unshift } from './unshift.js';

describe('Тесты unshift', () => {
    
    test("Должна добавить элемент в начало и вернуть новую длину: unshift([2, 3], 1) → 3, массив [1, 2, 3]", () => {
        const arr = [2, 3];
        const l = unshift(arr, 1);
        expect(l).toBe(3);
        expect(arr).toEqual([1, 2, 3]);
    });
    
    test("Должна работать с пустым массивом: unshift([], 'a') → 1, массив ['a']", () => {
        const arr = [];
        const l = unshift(arr, 'a');
        expect(l).toBe(1);
        expect(arr).toEqual(['a']);
    });
    
    test("Должна добавить в массив из одного элемента: unshift([20], 10) → 2, массив [10, 20]", () => {
        const arr = [20];
        const l = unshift(arr, 10);
        expect(l).toBe(2);
        expect(arr).toEqual([10, 20]);
    });
    
    test("Должна сохранить порядок остальных элементов (ничего не затерлось): unshift(['b', 'c', 'd'], 'a') → ['a', 'b', 'c', 'd']", () => {
        const arr = ['b', 'c', 'd'];
        const l = unshift(arr, 'a');
        expect(l).toBe(4);
        expect(arr).toEqual(['a', 'b', 'c', 'd']);
    });
    
    test("Два unshift подряд: первый элемент становится вторым", () => {
        const arr = [1, 2];
        const l_1 = unshift(arr, 0);
        const l_2 = unshift(arr, -1);
        expect(l_1).toBe(3);
        expect(l_2).toBe(4);
        expect(arr).toEqual([-1, 0, 1, 2]);
    });
    
    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => unshift('hello')).toThrow(TypeError);
    });

});
