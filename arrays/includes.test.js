import { describe, test, expect } from 'bun:test';
import { includes } from './includes.js';

describe('Тесты includes', () => {

    test("Должна вернуть true если элемент есть: includes([1, 2, 3], 2) → true", () => {
        const arr = [1, 2, 3];
        const copy = [...arr];
        const result = includes(arr, 2);
        expect(result).toBe(true);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть false если элемента нет: includes([1, 2, 3], 9) → false", () => {
        const arr = [1, 2, 3];
        const copy = [...arr];
        const result = includes(arr, 9);
        expect(result).toBe(false);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть false для пустого массива: includes([], 1) → false", () => {
        const arr = [];
        const copy = [...arr];
        const result = includes(arr, 1);
        expect(result).toBe(false);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть true для первого элемента: includes([1, 2, 3], 1) → true", () => {
        const arr = [1, 2, 3];
        const copy = [...arr];
        const result = includes(arr, 1);
        expect(result).toBe(true);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть true для последнего элемента: includes([1, 2, 3], 3) → true", () => {
        const arr = [1, 2, 3];
        const copy = [...arr];
        const result = includes(arr, 3);
        expect(result).toBe(true);
        expect(arr).toEqual(copy);
    });

    test("Должна найти строку: includes(['a', 'b'], 'b') → true", () => {
        const arr = ['a', 'b'];
        const copy = [...arr];
        const result = includes(arr, 'b');
        expect(result).toBe(true);
        expect(arr).toEqual(copy);
    });

    test("Должна различать 0 и false: includes([0], false) → false, includes([0], 0) → true", () => {
        const arr = [0];
        const copy = [...arr];
        const result_1 = includes(arr, false);
        const result_2 = includes(arr, 0);
        expect(result_1).toBe(false);
        expect(result_2).toBe(true);
        expect(arr).toEqual(copy);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => includes('hello', 'l')).toThrow(TypeError);
    });
    
});
