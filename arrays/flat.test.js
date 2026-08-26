import { describe, test, expect } from 'bun:test';
import { flat } from './flat.js';

describe('Тесты flat', () => {

    test("Должна разгладить один уровень: flat([1, [2, 3], 4]) → [1, 2, 3, 4]", () => {
        const arr = [1, [2, 3], 4];
        const result = flat(arr);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    test("Не изменяет исходный массив", () => {
        const arr = [1, [2, [3]]];
        flat(arr, 2);
        expect(arr).toEqual([1, [2, [3]]]);
    });

    test("Должна разгладить два уровня: flat([1, [2, [3, 4]]], 2) → [1, 2, 3, 4]", () => {
        const arr = [1, [2, [3, 4]]];
        const result = flat(arr, 2);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    test("Должна разгладить полностью с Infinity: flat([1, [2, [3, [4]]]], Infinity) → [1, 2, 3, 4]", () => {
        const arr = [1, [2, [3, [4]]]];
        const result = flat(arr, Infinity);
        expect(result).toEqual([1, 2, 3, 4]);
    });
    
    test("Должна вернуть копию для уже плоского массива: flat([1, 2, 3]) → [1, 2, 3], и исходный !== результат", () => {
        const arr = [1, 2, 3];
        const result = flat(arr);
        expect(result).toEqual([1, 2, 3]);
        expect(arr).toEqual([1, 2, 3]);
        expect(result).not.toBe(arr);
    });

    test("Должна вернуть пустой массив для пустого: flat([]) → []", () => {
        const arr = [];
        const result = flat(arr);
        expect(result).toEqual([]);
    });

    test("Должна не разглаживать при depth = 0: flat([1, [2, 3]], 0) → [1, [2, 3]]", () => {
        const arr = [1, [2, 3]];
        const result = flat(arr, 0);
        expect(result).toEqual([1, [2, 3]]);
    });

    test("Должна обрабатывать смешанную вложенность с глубиной по умолчанию: flat([1, [2], [3, [4]]]) → [1, 2, 3, [4]]", () => {
        const arr = [1, [2], [3, [4]]];
        const result = flat(arr);
        expect(result).toEqual([1, 2, 3, [4]]);
    });

    test("NaN трактуется как depth 0", () => {
        expect(flat([1, [2, [3]]], NaN)).toEqual([1, [2, [3]]]);
    });

    test("Отрицательная глубина трактуется как 0", () => {
        expect(flat([1, [2, [3]]], -1)).toEqual([1, [2, [3]]]);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => flat('hello', 2)).toThrow('Первый аргумент должен быть массивом');
    });

    test("Должна выбросить TypeError если callback не функция", () => {
        expect(() => flat([], '123')).toThrow('Второй аргумент должен быть числом');
    });

});
