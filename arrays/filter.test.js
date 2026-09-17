import { describe, test, expect } from 'bun:test';
import { filter } from './filter.js';

describe('Тесты filter', () => {

    test("Должна отфильтровать чётные: filter([1, 2, 3, 4], x => x % 2 === 0) → [2, 4]", () => {
        const arr = [1, 2, 3, 4];
        const result = filter(arr, x => x % 2 === 0);
        expect(result).toEqual([2, 4]);
    });

    test("Должна вернуть пустой массив если ни один не прошёл: filter([1, 3, 5], x => x > 10) → []", () => {
        const arr = [1, 3, 5];
        const result = filter(arr, x => x > 10);
        expect(result).toEqual([]);
    });

    test("Должна вернуть все элементы если все прошли: filter([2, 4, 6], x => x > 0) → [2, 4, 6]", () => {
        const arr = [2, 4, 6];
        const result = filter(arr, x => x > 0);
        expect(result).toEqual([2, 4, 6]);
    });

    test("Должна вернуть новый массив (исходный не изменился)", () => {
        const arr = [1, 2, 3, 4];
        const result = filter(arr, x => x % 2 !== 0);
        expect(result).toEqual([1, 3]);
        expect(arr).toEqual([1, 2, 3, 4]);
        expect(result).not.toBe(arr);
    });

    test("Должна вернуть пустой массив для пустого исходного: filter([], fn) → []", () => {
        const arr = [];
        const result = filter(arr, x => x > 0);
        expect(result).toEqual([]);
    });

    test("Должна передать правильные аргументы в callback: (элемент, индекс, массив)", () => {
        const arr = [10, 20];
        const calls = [];
        const result = filter(arr, (el, i, arr) => { calls.push({ el, i, arr }); return el % 10 === 0; });
        expect(result).toEqual([10, 20]);
        expect(calls).toEqual([
            { el: 10, i: 0, arr },
            { el: 20, i: 1, arr },
        ]);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => filter('hello', () => {})).toThrow('Первый аргумент должен быть массивом');
    });

    test("Должна выбросить TypeError если callback не функция", () => {
        expect(() => filter([], 123)).toThrow('Второй аргумент должен быть функцией');
    });
});
