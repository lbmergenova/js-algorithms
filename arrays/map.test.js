import { describe, test, expect } from 'bun:test';
import { map } from './map.js';

describe('Тесты map', () => {

    test("Должна удвоить числа: map([1, 2, 3], x => x * 2) → [2, 4, 6]", () => {
        const arr = [1, 2, 3];
        const result = map(arr, x => x * 2);
        expect(result).toEqual([2, 4, 6]);
    });
    
    test("Должна вернуть новый массив (исходный не изменился)", () => {
        const arr = [1, 2, 3];
        const result = map(arr, x => x * 2);
        expect(result).not.toBe(arr);
        expect(arr).toEqual([1, 2, 3]);
    });
    
    test("Должна вернуть пустой массив для пустого исходного: map([], fn) → []", () => {
        const arr = [];
        const result = map(arr, x => x * 2);
        expect(result).toEqual([]);
        expect(result).not.toBe(arr);
    });
    
    test("Должна передать правильные аргументы в callback: map([10, 20], (el, i, arr) => { calls.push({ el, i }); return el; })", () => {
        const arr = [10, 20];
        const calls = [];
        const result = map(arr, (el, i, arr) => { calls.push({ el, i, arr }); return el; });
        expect(result).toEqual([10, 20]);
        expect(calls).toEqual([
            { el: 10, i: 0, arr },
            { el: 20, i: 1, arr },
        ]);
    });
    
    test("Должна работать с преобразованием типов: map([1, 2], x => String(x)) → ['1', '2']", () => {
        const arr = [1, 2];
        const result = map(arr, x => String(x));
        expect(result).toEqual(['1', '2']);
    });
    
    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => map('hello', () => {})).toThrow('Первый аргумент должен быть массивом');
    });

    test("Должна выбросить TypeError если callback не функция", () => {
        expect(() => map([], 123)).toThrow('Второй аргумент должен быть функцией');
    });

});
