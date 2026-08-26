import { describe, test, expect } from 'bun:test';
import { forEach } from './for-each.js';

describe('Тесты forEach', () => {

    test("Должна вызвать callback для каждого элемента", () => {
        const calls = [];
        forEach([1, 2, 3], (el, i, arr) => {
           calls.push({ el, i, arr });
        });
        expect(calls).toEqual([
            { el: 1, i: 0, arr: [1, 2, 3] },
            { el: 2, i: 1, arr: [1, 2, 3] },
            { el: 3, i: 2, arr: [1, 2, 3] },
        ]);
    });

    test("Должна передать правильные аргументы в callback", () => {
        const arr = [1, 2, 3];
        const calls = [];
        forEach(arr, (el, i, arr) => {
            calls.push(el);
        });
        expect(calls[0]).toBe(1);
        expect(calls[1]).toBe(2);
        expect(calls[2]).toBe(3);
    });

    test("Должна не вызывать callback для пустого массива", () => {
        const arr = [];
        const calls = [];
        let count = 0;
        forEach(arr, (el, i, arr) => {
            calls.push({ el, i, arr });
            count++;
        });
        expect(calls).toEqual([]);
        expect(count).toBe(0);
    });

    test("Должна вернуть undefined", () => {
        const arr = [1, 2, 3];
        const calls = [];
        const result = forEach(arr, (el, i, arr) => {
            calls.push({ el, i, arr });
        });
        expect(result).toBe(undefined);
    });

    test("Должен выбросить TypeError, если первый аргумент не массив", () => {
        expect(() => forEach('hello', () => {})).toThrow("Первый аргумент должен быть массивом");
    });

    test("Должен выбросить TypeError, если второй аргумент не функция", () => {
        expect(() => forEach([],123)).toThrow("Второй аргумент должен быть функцией");
    });

});
