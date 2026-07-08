// string-utils/len.test.js
import { describe, test, expect } from 'bun:test';
import { len } from './len.js';

describe('Тесты len', () => {
  test('должна вернуть 5 для строки "hello"', () => {
    expect(len('hello')).toEqual(5);
  });

  test('lолжна вернуть 0 для пустой строки (\'\')', () => {
    expect(len('')).toEqual(0);
  });

  test('lолжна вернуть 3 для строки из трёх пробелов (\'   \')', () => {
    expect(len('   ')).toEqual(3);
  });

  test('должна корректно считать кириллицу — len(\'привет\') → 6', () => {
    expect(len('привет')).toEqual(6);
  });

  test('должна выбросить TypeError если аргумент — число (123)', () => {
    expect(() => len(123)).toThrow(TypeError);
});

  test('должна выбросить TypeError если аргумент — null, undefined', () => {
  expect(() => len(null)).toThrow('Аргумент должен быть строкой');
  });

    test('должна выбросить TypeError если аргумент — undefined', () => {
  expect(() => len(undefined)).toThrow(TypeError);
  });
});


