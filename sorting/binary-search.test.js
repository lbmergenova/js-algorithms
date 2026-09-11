import { describe, test, expect } from 'bun:test';
import { binarySearch } from './binary-search.js';

describe('Тесты binarySearch', () => {

    test("Пустой массив: binarySearch([], 5) → -1", () => {
        expect(binarySearch([], 5)).toBe(-1);
    });

    test("Один элемент найден: binarySearch([7], 7) → 0", () => {
        expect(binarySearch([7], 7)).toBe(0);
    });

    test("Один элемент не найден: binarySearch([7], 5) → -1", () => {
        expect(binarySearch([7], 5)).toBe(-1);
    });

    test("Элемент в начале: binarySearch([1, 2, 3, 4, 5], 1) → 0", () => {
        expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
    });

    test("Элемент в конце: binarySearch([1, 2, 3, 4, 5], 5) → 4", () => {
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    });

    test("Элемент в середине: binarySearch([1, 2, 3, 4, 5], 3) → 2", () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    });

    test("Элемент отсутствует: binarySearch([1, 2, 3, 4, 5], 10) → -1", () => {
        expect(binarySearch([1, 2, 3, 4, 5], 10)).toBe(-1);
    });

    test("Чётная длина: binarySearch([1, 3, 5, 7], 3) → 1", () => {
        expect(binarySearch([1, 3, 5, 7], 3)).toBe(1);
    });
    
    test("Не массив: binarySearch('abc', 1) → TypeError", () => {
        expect(() => binarySearch('abc', 1)).toThrow(TypeError)
    });

});
