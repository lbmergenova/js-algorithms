import { describe, test, expect } from 'bun:test';
import { find } from './find.js';

describe('Тесты findIndex', () => {

    test("Должна найти первый подходящий элемент: findIndex([1, 2, 3, 4], x => x > 2) → 3", () => {
        const arr = [1, 2, 3, 4];
        const result = find(arr, x => x > 2);
        expect(result).toBe(3);
    });

    test("Не должна изменять исходный массив", () => {
        const arr = [1, 2, 3, 4];
        find(arr, x => x > 2);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    test("Должна вернуть undefined если элемент не найден", () => {
        const arr = [1, 2, 3, 4];
        const result = find(arr, x => x > 10);
        expect(result).toBe(undefined);
    });

    test("Должна вернуть undefined для пустого массива: findIndex([], () => true) → undefined", () => {
        const arr = [];
        const result = find(arr, () => true);
        expect(result).toBe(undefined);
    });

    test("Должна остановиться на первом совпадении: findIndex([1, 2, 3, 4], x => x > 1) → 2", () => {
        const arr = [1, 2, 3, 4];
        const result = find(arr, x => x > 1);
        expect(result).toBe(2);
    });

    test("Должна передавать правильные аргументы в callback (el, i, arr) => {...}", () => {
        const calls = [];
        find([1, 2, 3], (el, i, arr) => {
           calls.push({ el, i, arr });
        });
        expect(calls).toEqual([
            { el: 1, i: 0, arr: [1, 2, 3] },
            { el: 2, i: 1, arr: [1, 2, 3] },
            { el: 3, i: 2, arr: [1, 2, 3] },
        ]);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => find('hello', () => {})).toThrow('Первый аргумент должен быть массивом');
    });

    test("Должна выбросить TypeError если callback не функция", () => {
        expect(() => find([], 123)).toThrow('Второй аргумент должен быть функцией');
    });

});
