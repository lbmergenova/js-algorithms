import { describe, test, expect } from 'bun:test';
import { cloneDeep } from './clone-deep.js';

describe('Тесты cloneDeep', () => {

    test("Должна вернуть тот же примитив cloneDeep(42) → 42", () => {
        const obj = 42;
        const result = cloneDeep(obj);
        expect(result).toEqual(obj);
    });

    test("Должна вернуть тот же примитив cloneDeep('hello') → 'hello'", () => {
        const obj = 'hello';
        const result = cloneDeep(obj);
        expect(result).toEqual(obj);
    });

    test("Должна вернуть null для null: cloneDeep(null) → null", () => {
        const obj = null;
        const result = cloneDeep(obj);
        expect(result).toEqual(null);
    });

    test("Должна вернуть новый массив (не ссылку): const arr = [1, 2]; cloneDeep(arr) !== arr", () => {
        const arr = [1, 2];
        const result = cloneDeep(arr);
        expect(result).toEqual([1, 2]);
        expect(result).not.toBe(arr);
        expect(Array.isArray(result)).toBe(true);
    });

    test("Должна создать копию плоского объекта: cloneDeep({ a: 1, b: 2 }) → { a: 1, b: 2 }", () => {
        const obj = { a: 1, b: 2 };
        const result = cloneDeep(obj);
        expect(result).toEqual({ a: 1, b: 2 });
        expect(result).not.toBe(obj);
    });

    test("Должна создать глубокую копию вложенного объекта: изменение copy.a.b.c не меняет original.a.b.c", () => {
        const obj = { a: { b: { c: [1, 2]}}};
        const result = cloneDeep(obj);
        result.a.b.c[0] = 2;
        expect(obj.a.b.c[0]).toBe(1);
    });

    test("Должна создать копию массива: cloneDeep([1, 2, 3]) → [1, 2, 3], изменение копии не меняет оригинал", () => {
        const arr = [1, 2, 3];
        const result = cloneDeep(arr);
        result[0] = 8;
        expect(arr[0]).toBe(1);
    });
    
    test("Должна создать копию вложенного массива: cloneDeep([1, [2, [3]]]) — три уровня", () => {
        const arr = [1, [2, [3]]];
        const result = cloneDeep(arr);
        result[1][1][0] = 10;
        expect(arr[1][1][0]).toBe(3);
    });

    test("Должна создать копию смешанной структуры: объект с массивами", () => {
        const obj = {
            a: [1, 2],
            b: "hello",
            c: ["a", { a: [1, 2, 3] }, 123]
        };
        const result = cloneDeep(obj);
        result.a[0] = 10;
        result.c[1].a[0] = 20;
        expect(obj.a[0]).toBe(1);
        expect(obj.c[1].a[0]).toBe(1);
    });

    test("Должна вернуть undefined для undefined", () => {
        expect(cloneDeep(undefined)).toBe(undefined);
    });
    
});
