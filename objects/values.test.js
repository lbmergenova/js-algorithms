import { describe, test, expect } from 'bun:test';
import { values } from './values.js';

describe('Тесты values', () => {

    test("Должна вернуть массив значений: values({ a: 1, b: 2, c: 3 }) → [1, 2, 3]", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = values(obj);
        expect(result).toEqual([1, 2, 3]);
        expect(obj).toEqual({ a: 1, b: 2, c: 3 })
    });
    
    test("Должна вернуть значения в правильном порядке", () => {
        const obj = {
            b: 1,
            10: "ten",
            2: "two",
            a: 2,
            1: "one"
        };
        const result = values(obj);
        expect(result).toEqual([ "one", "two", "ten", 1, 2 ]);
    });

    test("Должна вернуть пустой массив для пустого объекта: values({}) → []", () => {
        const obj = {};
        const result = values(obj);
        expect(result).toEqual([]);
    });

    test("Должна вернуть значения разных типов: values({ name: 'Анна', age: 25, active: true }) → ['Анна', 25, true]", () => {
        const obj = { name: 'Анна', age: 25, active: true };
        const result = values(obj);
        expect(result).toEqual(['Анна', 25, true]);
    });

    test("Должна корректно обрабатывать null и undefined среди значений: values({ a: null, b: undefined }) → [null, undefined]", () => {
        const obj = { a: null, b: undefined };
        const result = values(obj);
        expect(result).toEqual([null, undefined]);
    });

    test("Унаследованные свойства не должны попадать в результат (добавь свойство в Object.prototype перед вызовом и удали после — для чистоты теста).", () => {
        Object.prototype.custom = 'я унаследованное';
        const obj = { a: 1 };
        const result = values(obj);
        expect(result).toEqual([1]);
        delete Object.prototype.custom;
    });

    test("Должна выбросить TypeError если obj равен null", () => {
        expect(() => values(null)).toThrow('Аргумент должен быть объектом');
    });

    test("Должна выбросить TypeError если obj не объект", () => {
        expect(() => values(123)).toThrow(TypeError);
        expect(() => values("123")).toThrow(TypeError);
        expect(() => values(true)).toThrow(TypeError);
    });
});
