import { describe, test, expect } from 'bun:test';
import { findIndex } from './find-index.js';

describe('Тесты findIndex', () => {

    test("Должна найти индекс первого подходящего элемента: findIndex([1, 2, 3, 4], x => x > 2) → 2", () => {
        const arr = [1, 2, 3, 4];
        const result = findIndex(arr, x => x > 2);
        expect(result).toBe(2);
    });

    test("Не должна изменять исходный массив", () => {
        const arr = [1, 2, 3, 4];
        findIndex(arr, x => x > 2);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    test("Должна вернуть -1 если элемент не найден: findIndex([1, 2, 3], x => x > 10) → -1", () => {
        const arr = [1, 2, 3, 4];
        const result = findIndex(arr, x => x > 10);
        expect(result).toBe(-1);
    });

    test("Должна вернуть -1 для пустого массива: findIndex([], () => true) → -1", () => {
        const arr = [];
        const result = findIndex(arr, () => true);
        expect(result).toBe(-1);
    });

    test("Должна остановиться на первом совпадении: findIndex([1, 2, 3, 4], x => x > 1) → 1", () => {
        const arr = [1, 2, 3, 4];
        const result = findIndex(arr, x => x > 1);
        expect(result).toBe(1);
    });

    test("Должна вернуть 0 если первый же элемент подходит: findIndex([5, 7, 3], x => x > 4) → 0", () => {
        const arr = [5, 7, 3];
        const result = findIndex(arr, x => x > 4);
        expect(result).toBe(0);
    });

    test("Должна передавать правильные аргументы в callback (el, i, arr) => {...}", () => {
        const calls = [];
        findIndex([1, 2, 3], (el, i, arr) => {
           calls.push({ el, i, arr });
        });
        expect(calls).toEqual([
            { el: 1, i: 0, arr: [1, 2, 3] },
            { el: 2, i: 1, arr: [1, 2, 3] },
            { el: 3, i: 2, arr: [1, 2, 3] },
        ]);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => findIndex('hello', () => {})).toThrow('Первый аргумент должен быть массивом');
    });

    test("Должна выбросить TypeError если callback не функция", () => {
        expect(() => findIndex([], 123)).toThrow('Второй аргумент должен быть функцией');
    });

});
