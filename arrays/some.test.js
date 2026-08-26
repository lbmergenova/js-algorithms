import { describe, test, expect } from 'bun:test';
import { some } from './some.js';

describe('Тесты some', () => {

    test("Должна вернуть true если хотя бы один подходит: some([1, 2, 3], x => x > 2) → true", () => {
        const arr = [1, 2, 3];
        const result = some(arr, x => x > 2);
        expect(result).toBe(true);
    });

    test("Не должна изменять исходный массив", () => {
        const arr = [1, 2, 3];
        some(arr, x => x > 2);
        expect(arr).toEqual([1, 2, 3]);
    });

    test("Должна вернуть false если ни один не подходит: some([1, 2, 3], x => x > 10) → false", () => {
        const arr = [1, 2, 3];
        const result = some(arr, x => x > 10);
        expect(result).toBe(false);
    });

    test("Должна вернуть false для пустого массива: some([], fn) → false", () => {
        const arr = [];
        const result = some(arr, x => x > 2);
        expect(result).toBe(false);
    });

    test('должна остановиться при первом true', () => {
      let callCount = 0;
      const result = some([5, 10, 15], (x) => {
        callCount++;
        return x === 5;
      });
      expect(result).toBe(true);
      expect(callCount).toBe(1);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => some('hello', () => {})).toThrow('Первый аргумент должен быть массивом');
    });

    test("Должна выбросить TypeError если callback не функция", () => {
        expect(() => some([], 123)).toThrow('Второй аргумент должен быть функцией');
    });

});
