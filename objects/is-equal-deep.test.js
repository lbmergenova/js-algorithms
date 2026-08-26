import { describe, test, expect } from 'bun:test';
import { isEqualDeep } from './is-equal-deep.js';

describe('Тесты isEqualDeep', () => {

    test("Должна вернуть true для одинаковых чисел: isEqualDeep(1, 1) → true", () => {
        const obj1 = 1;
        const obj2 = 1;
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(true);
    });

    test("Должна вернуть false для разных чисел: isEqualDeep(1, 2) → true", () => {
        const obj1 = 1;
        const obj2 = 2;
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(false);
    });

    test("Должна вернуть false для разных типов: isEqualDeep(1, '1') → false", () => {
        const obj1 = 1;
        const obj2 = '1';
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(false);
    });

    test("Должна вернуть true для двух null: isEqualDeep(null, null) → true", () => {
        const obj1 = null;
        const obj2 = null;
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(true);
    });

    test("Должна вернуть false для null и undefined: isEqualDeep(null, undefined) → false", () => {
        const obj1 = null;
        const obj2 = undefined;
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(false);
    });

    test("Должна вернуть true для одинаковых плоских объектов: isEqualDeep({ a: 1, b: 2 }, { a: 1, b: 2 }) → true", () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1, b: 2 };
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(true);
    });

    test("Должна вернуть false для объектов с разными значениями: isEqualDeep({ a: 1 }, { a: 2 }) → false", () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 2 };
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(false);
    });

    test("Должна вернуть false для объектов с разным количеством ключей: isEqualDeep({ a: 1 }, { a: 1, b: 2 }) → false", () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 1, b: 2 };
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(false);
    });

    test("Должна вернуть true для глубоко вложенных одинаковых структур: isEqualDeep({ a: { b: [1, 2] } }, { a: { b: [1, 2] } }) → true", () => {
        const obj1 = { a: { b: [1, 2] } };
        const obj2 = { a: { b: [1, 2] } };
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(true);
    });

    test("Должна вернуть false для глубоко вложенных разных структур: isEqualDeep({ a: { b: [1, 2] } }, { a: { b: [1, 3] } }) → false", () => {
        const obj1 = { a: { b: [1, 2] } };
        const obj2 = { a: { b: [1, 3] } };
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(false);
    });

    test("Должна вернуть true для одинаковых массивов: isEqualDeep([1, 2, 3], [1, 2, 3]) → true", () => {
        const obj1 = [1, 2, 3];
        const obj2 = [1, 2, 3];
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(true);
    });

    test("Должна вернуть false для массивов разной длины: isEqualDeep([1, 2], [1, 2, 3]) → false", () => {
        const obj1 = [1, 2];
        const obj2 = [1, 2, 3];
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(false);
    });

    test("Должна вернуть false для массива и объекта: isEqualDeep([], {}) → false", () => {
        const obj1 = [];
        const obj2 = {};
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(false);
    });

    test("Должна вернуть false для { x: undefined } и {} (проверка что свойство существует, а не просто undefined)", () => {
        const obj1 = { x: undefined };
        const obj2 = {};
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(false);
    });

    test("Должна вернуть true для { x: undefined } и { x: undefined }", () => {
        const obj1 = { x: undefined };
        const obj2 = { x: undefined };
        const result = isEqualDeep(obj1, obj2);
        expect(result).toBe(true);
    });

});
