import { describe, test, expect } from 'bun:test';
import { at } from './at.js';
import { len } from './len.js';

describe('Тесты at', () => {

    test("Должна вернуть элемент по положительному индексу: at([10, 20, 30], 1) → 20", () => {
        const arr = [10, 20, 30];
        const copy = [...arr];
        const result = at(arr, 1);
        expect(result).toBe(20);
        expect(arr).toEqual(copy);
    });
    
    test("Должна вернуть первый элемент: at([10, 20, 30], 0) → 10", () => {
        const arr = [10, 20, 30];
        const copy = [...arr];
        const result = at(arr, 0);
        expect(result).toBe(10);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть последний элемент по отрицательному индексу: at([10, 20, 30], -1) → 30", () => {
        const arr = [10, 20, 30];
        const copy = [...arr];
        const result = at(arr, -1);
        expect(result).toBe(30);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть предпоследний элемент: at([10, 20, 30], -2) → 20", () => {
        const arr = [10, 20, 30];
        const copy = [...arr];
        const result = at(arr, -2);
        expect(result).toBe(20);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть первый элемент по индексу -len: at([10, 20, 30], -3) → 10", () => {
        const arr = [10, 20, 30];
        const copy = [...arr];
        const result = at(arr, -3);
        expect(result).toBe(10);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть undefined при выходе за правую границу: at([10, 20, 30], 5) → undefined", () => {
        const arr = [10, 20, 30];
        const copy = [...arr];
        const result = at(arr, 5);
        expect(result).toBe(undefined);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть undefined при выходе за левую границу: at([10, 20, 30], -5) → undefined", () => {
        const arr = [10, 20, 30];
        const copy = [...arr];
        const result = at(arr, -5);
        expect(result).toBe(undefined);
        expect(arr).toEqual(copy);
    });

    test("Должна отбрасывать дробную часть положительного индекса: at([10, 20, 30], 1.3) → 20", () => {
        const arr = [10, 20, 30];
        const copy = [...arr];
        const result = at(arr, 1.3);
        expect(result).toBe(20);
        expect(arr).toEqual(copy);
        
    });

    test("Должна отбрасывать дробную часть отрицательного индекса: at([10, 20, 30], -1.3) → 30", () => {
        const arr = [10, 20, 30];
        const copy = [...arr];
        const result = at(arr, -1.3);
        expect(result).toBe(30);
        expect(arr).toEqual(copy);
        
    });

    test("Должна вернуть первый элемент при NaN: at([10, 20, 30], NaN) → 10", () => {
        const arr = [10, 20, 30];
        const copy = [...arr];
        const result = at(arr, NaN);
        expect(result).toBe(10);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть undefined при Infinity: at([10, 20, 30], Infinity) → undefined", () => {
        const arr = [10, 20, 30];
        const copy = [...arr];
        const result = at(arr, Infinity);
        expect(result).toBe(undefined);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть undefined для пустого массива: at([], 0) → undefined", () => {
        const arr = [];
        const copy = [...arr];
        const result = at(arr, 0);
        expect(result).toBe(undefined)
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть undefined для пустого массива при отрицательном индексе: at([], -1) → undefined", () => {
        const arr = [];
        const copy = [...arr];
        const result = at(arr, -1);
        expect(result).toBe(undefined);
        expect(arr).toEqual(copy);
    });

    test("Должна работать с массивом строк: at(['a', 'b', 'c'], 2) → 'c'", () => {
        const arr = ['a', 'b', 'c'];
        const copy = [...arr];
        const result = at(arr, 2);
        expect(result).toBe('c')
        expect(arr).toEqual(copy);;
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => at(123, 3)).toThrow('Первый аргумент должен быть массивом');
    });

    test("Должна выбросить TypeError если index не число (at([1], 'a'))", () => {
        expect(() => at([1], 'a')).toThrow('Второй аргумент должен быть числом');
    });
});
