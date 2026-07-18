import { describe, test, expect } from 'bun:test';
import { isMore } from './is-more.js';

describe('Тесты isMore', () => {

    test('должна вернуть true если a явно больше — различие на третьем символе (\'cat\', \'car\')', () => {
        expect(isMore('cat', 'car')).toBe(true);
    });

    test('должна вернуть false если a явно меньше (\'car\', \'cat\')', () => {
        expect(isMore('car', 'cat')).toBe(false);
    });

    test('должна вернуть false для равных строк (\'hello\', \'hello\')', () => {
        expect(isMore('hello', 'hello')).toBe(false);
    });

    test('должна вернуть true если a длиннее, но символы совпадают (\'hello!\', \'hello\')', () => {
        expect(isMore('hello!', 'hello')).toBe(true);
    });

    test('должна вернуть false если a короче, но символы совпадают (\'hello\', \'hello!\')', () => {
        expect(isMore('hello', 'hello!')).toBe(false);
    });

    test('должна вернуть true если первый символ a больше — длина не важна (\'b\', \'aaaaa\')', () => {
        expect(isMore('b', 'aaaaa')).toBe(true);
    });

    test('должна вернуть false для заглавной vs строчной — \'A\'(65) < \'a\'(97) (\'Admin\', \'admini\')', () => {
        expect(isMore('Admin', 'admini')).toBe(false);
    });

    test('должна вернуть false если a начинается с пробела, а b с буквы (\' a\', \'aa\')', () => {
        expect(isMore(' a', 'aa')).toBe(false);
    });

    test('должна вернуть true если a заканчивается пробелом (\'aa \', \'aa\')', () => {
        expect(isMore('aa ', 'aa')).toBe(true);
    });

    test('должна вернуть false для пустых строк (\'\', \'\')', () => {
        expect(isMore('', '')).toBe(false);
    });

    test('должна вернуть false если a пустая, b нет (\'\', \'a\')', () => {
        expect(isMore('', 'a')).toBe(false);
    });

    test('должна выбросить TypeError если аргументы не строка', () => {
        expect(() => isMore(123,'hello')).toThrow('Первый аргумент должен быть строкой');
        expect(() => isMore('hello')).toThrow('Второй аргумент должен быть строкой');
    });
}
)
