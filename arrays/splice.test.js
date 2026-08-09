import { describe, test, expect } from 'bun:test';
import { splice } from './splice.js';

describe('Тесты splice', () => {

    test("Должна удалить элемент из середины: splice([1, 2, 3, 4], 1, 2) → вернуть [2, 3], массив [1, 4]", () => {
        const arr = [1, 2, 3, 4];
        const result = splice(arr, 1, 2);
        expect(result).toEqual([2, 3]);
        expect(arr).toEqual([1, 4]);
    });

    test("Должна удалить с начала: splice([1, 2, 3], 0, 1) → вернуть [1], массив [2, 3]", () => {
        const arr = [1, 2, 3];
        const result = splice(arr, 0, 1);
        expect(result).toEqual([1]);
        expect(arr).toEqual([2, 3]);
    });

    test("Должна удалить с конца: splice([1, 2, 3], 2, 1) → вернуть [3], массив [1, 2]", () => {
        const arr = [1, 2, 3];
        const result = splice(arr, 2, 1);
        expect(result).toEqual([3]);
        expect(arr).toEqual([1, 2]);
    });

    test("Должна удалить всё от start до конца если deleteCount не передан: splice([1, 2, 3, 4], 2) → [3, 4], массив [1, 2]", () => {
        const arr = [1, 2, 3, 4];
        const result = splice(arr, 2);
        expect(result).toEqual([3,4]);
        expect(arr).toEqual([1, 2]);
    });

    test("Должна вернуть пустой массив если deleteCount = 0: splice([1, 2, 3], 1, 0) → [], массив не изменился", () => {
        const arr = [1, 2, 3];
        const result = splice(arr, 1, 0);
        expect(result).toEqual([]);
        expect(arr).toEqual([1, 2, 3]);
    });

    test("Должна поддерживать отрицательный start: splice([1, 2, 3, 4], -2, 1) → [3], массив [1, 2, 4]", () => {
        const arr = [1, 2, 3, 4];
        const result = splice(arr, -2, 1);
        expect(result).toEqual([3]);
        expect(arr).toEqual([1, 2, 4]);
    });

    test("Должна обрезать deleteCount если он больше оставшихся элементов: splice([1, 2, 3], 1, 5) → [2, 3], массив [1]", () => {
        const arr = [1, 2, 3];
        const result = splice(arr, 1, 5);
        expect(result).toEqual([2, 3]);
        expect(arr).toEqual([1]);
    });

    test("Должна вернуть пустой массив если start >= len: splice([1, 2, 3], 5, 1) → []", () => {
        const arr = [1, 2, 3];
        const result = splice(arr, 5, 1);
        expect(result).toEqual([]);
        expect(arr).toEqual([1, 2, 3]);
    });

    test("Должна вставить элементы на место удалённых: splice([1, 2, 3], 1, 1, 'a', 'b') → вернуть [2], массив [1, 'a', 'b', 3]", () => {
        const arr = [1, 2, 3];
        const result = splice(arr, 1, 1, 'a', 'b');
        expect(result).toEqual([2]);
        expect(arr).toEqual([1, 'a', 'b', 3]);
    });

    test("Должна вставить элементы без удаления: splice([1, 2, 3], 1, 0, 'x') → вернуть [], массив [1, 'x', 2, 3]", () => {
        const arr = [1, 2, 3];
        const result = splice(arr, 1, 0, 'x');
        expect(result).toEqual([]);
        expect(arr).toEqual([1, 'x', 2, 3]);
    });

    test("Должна вставить в начало: splice([2, 3], 0, 0, 0, 1) → вернуть [], массив [0, 1, 2, 3]", () => {
        const arr = [2, 3];
        const result = splice(arr, 0, 0, 0, 1);
        expect(result).toEqual([]);
        expect(arr).toEqual([0, 1, 2, 3]);
    });

    test("Должна вставить в конец: splice([1, 2], 2, 0, 3, 4) → вернуть [], массив [1, 2, 3, 4]", () => {
        const arr = [1, 2];
        const result = splice(arr, 2, 0, 3, 4);
        expect(result).toEqual([]);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    test("Должна заменить элементы: splice([1, 2, 3], 0, 2, 'a') → вернуть [1, 2], массив ['a', 3]", () => {
        const arr = [1, 2, 3];
        const result = splice(arr, 0, 2, 'a');
        expect(result).toEqual([1, 2]);
        expect(arr).toEqual(['a', 3]);
    });

    test("Должна заменить несколько элементов на такое же количество", () => {
        const arr = [1, 2, 3, 4, 5];
        const result = splice(arr, 1, 2, 'a', 'b');
        expect(result).toEqual([2, 3]);
        expect(arr).toEqual([1, 'a', 'b', 4, 5]);
    });

    test("Должна заменить несколько элементов одним", () => {
        const arr = [1, 2, 3, 4, 5];
        const result = splice(arr, 1, 3, 'x');
        expect(result).toEqual([2, 3, 4]);
        expect(arr).toEqual([1, 'x', 5]);
    });

    test("Должна заменить один элемент несколькими", () => {
        const arr = [1, 2, 3, 4];
        const result = splice(arr, 1, 1, 'a', 'b', 'c');
        expect(result).toEqual([2]);
        expect(arr).toEqual([1, 'a', 'b', 'c', 3, 4]);
    });

    test("Должна вставить несколько элементов без удаления", () => {
        const arr = [1, 2, 3];
        const result = splice(arr, 1, 0, 'a', 'b', 'c');
        expect(result).toEqual([]);
        expect(arr).toEqual([1, 'a', 'b', 'c', 2, 3]);
    });

    test("Должна корректно обработать слишком большой отрицательный start", () => {
        const arr = [1, 2, 3];
        const result = splice(arr, -10, 1);
        expect(result).toEqual([1]);
        expect(arr).toEqual([2, 3]);
    });

    test("Должна обрезать deleteCount и вставить новые элементы", () => {
        const arr = [1, 2, 3, 4];
        const result = splice(arr, 1, 100, 'x', 'y');
        expect(result).toEqual([2, 3, 4]);
        expect(arr).toEqual([1, 'x', 'y']);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => splice('hello', 1)).toThrow('Первый аргумент должен быть массивом');
    });
    
    test("Должна выбросить TypeError если start не числ0", () => {
        expect(() => splice([], 'a')).toThrow('Аргумент start должен быть числом');
    });

    test("Должна выбросить TypeError если deleteCounnt не числ0", () => {
        expect(() => splice([], 1, 'a')).toThrow('Аргумент deleteCount должен быть числом');
    });

});
