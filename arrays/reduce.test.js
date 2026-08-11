import { describe, test, expect } from 'bun:test';
import { reduce } from './reduce.js';

describe('Тесты reduce', () => {

    test("Должна посчитать сумму без initialValue: reduce([1, 2, 3], (acc, x) => acc + x) → 6", () => {
        const arr = [1, 2, 3];
        const result = reduce(arr, (acc, x) => acc + x);
        expect(result).toBe(6);
    });
    
    test("Должна посчитать сумму с initialValue: reduce([1, 2, 3], (acc, x) => acc + x, 4) → 10", () => {
        const arr = [1, 2, 3];
        const result = reduce(arr, (acc, x) => acc + x, 4);
        expect(result).toBe(10);
    });
    
    test("Должна вернуть initialValue для пустого массива: reduce([], (acc, x) => acc + x, 42) → 42", () => {
        const arr = [];
        const result = reduce(arr, (acc, x) => acc + x, 42);
        expect(result).toBe(42);
    });
    
    test("Должна выбросить TypeError для пустого массива без initialValue: reduce([], (acc, x) => acc + x) — используй toThrow()", () => {
        const arr = [];
        expect(() => reduce(arr, (acc, x) => acc + x)).toThrow("Невозможно выполнить reduce для пустого массива без начального значения аккумулятора");
    });
    
    test("Должна сконкатенировать строки: reduce(['a', 'b', 'c'], (acc, s) => acc + s, '') → 'abc'", () => {
        const arr = ['a', 'b', 'c'];
        const result = reduce(arr, (acc, s) => acc + s, '');
        expect(result).toBe('abc');
    });
    
    test("Должна работать с массивом из одного элемента без initialValue: reduce([42], (acc, x) => acc + x) → 42", () => {
        const arr = [42];
        const result = reduce(arr, (acc, x) => acc + x);
        expect(result).toBe(42);
    });
    
    test("Должна передавать правильные аргументы в callback: собрать вызовы и проверить acc, element, index", () => {
        const calls = [];
        reduce([1, 2, 3], (acc, el, i, arr) => {
           calls.push({ acc, el, i, arr });
           return acc + el
        }, 4);
        expect(calls).toEqual([
            { acc: 4, el: 1, i: 0, arr: [1, 2, 3] },
            { acc: 5, el: 2, i: 1, arr: [1, 2, 3] },
            { acc: 7, el: 3, i: 2, arr: [1, 2, 3] },
        ]);
    });
    
    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => reduce('hello', () => {})).toThrow('Первый аргумент должен быть массивом');
    });

    test("Должна выбросить TypeError если callback не функция", () => {
        expect(() => reduce([], 123)).toThrow('Второй аргумент должен быть функцией');
    });

});
