import { describe, test, expect } from 'bun:test';
import { len } from './len.js';

describe('Тесты len', () => {

    test("Должна вернуть 3 для [1, 2, 3]", () => {
        const arr = [1, 2, 3];
        const copy = [...arr];
        expect(len(arr)).toBe(3);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть 0 для пустого массива []", () => {
        const arr = [];
        const copy = [...arr];
        expect(len(arr)).toBe(0);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть 1 для массива из одного элемента [42]", () => {
        const arr = [42];
        const copy = [...arr];
        expect(len(arr)).toBe(1);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть 4 для массива строк ['a', 'b', 'c', 'd']", () => {
        const arr = ['a', 'b', 'c', 'd'];
        const copy = [...arr];
        expect(len(arr)).toBe(4);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть 5 для массива с разными типами [1, 'two', true, null, 0]", () => {
        const arr = [1, 'two', true, null, 0];
        const copy = [...arr];
        expect(len(arr)).toBe(5);
        expect(arr).toEqual(copy);
    });

    test("Должна вернуть 0 — исходный массив не изменился (проверь arr[0] до и после)", () => {
        const arr = [];
        const copy = [...arr];
        expect(len(arr)).toBe(0);
        expect(arr).toEqual(copy);
    });

    test("Должна выбросить TypeError если передать строку len('hello')", () => {
        expect(() => len('hello')).toThrow(TypeError);
    });

    test("Должна выбросить TypeError если передать число len(123)", () => {
        expect(() => len(123)).toThrow(TypeError);
    });

    test("Должна выбросить TypeError если передать объект len({0: 'a'})", () => {
        expect(() => len({0: 'a'})).toThrow(TypeError);
    });

    test("Должна выбросить TypeError если аргумент не передан len()", () => {
        expect(() => len()).toThrow(TypeError);
    });

});
