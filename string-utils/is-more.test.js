import { describe, test, expect } from 'bun:test';
import { isMore } from './is-more.js';

describe('Тесты isMore', () => {

    test('должна вернуть true если a явно больше — различие на третьем символе (\'cat\', \'car\')', () => {
        expect(isMore('cat', 'car')).toEqual(true);
    });

    test('должна вернуть false если a явно меньше (\'car\', \'cat\')', () => {
        expect(isMore('car', 'cat')).toEqual(false);
    });

    test('должна вернуть false для равных строк (\'hello\', \'hello\')', () => {
        expect(isMore('hello', 'hello')).toEqual(false);
    });

    test('должна вернуть true если a длиннее, но символы совпадают (\'hello!\', \'hello\')', () => {
        expect(isMore('hello!', 'hello')).toEqual(true);
    });

    test('должна вернуть false если a короче, но символы совпадают (\'hello\', \'hello!\')', () => {
        expect(isMore('hello', 'hello!')).toEqual(false);
    });

    test('должна вернуть true если первый символ a больше — длина не важна (\'b\', \'aaaaa\')', () => {
        expect(isMore('b', 'aaaaa')).toEqual(true);
    });

    test('должна вернуть false для заглавной vs строчной — \'A\'(65) < \'a\'(97) (\'Admin\', \'admini\')', () => {
        expect(isMore('Admin', 'admini')).toEqual(false);
    });

    test('должна вернуть false если a начинается с пробела, а b с буквы (\' a\', \'aa\')', () => {
        expect(isMore(' a', 'aa')).toEqual(false);
    });

    test('должна вернуть true если a заканчивается пробелом (\'aa \', \'aa\')', () => {
        expect(isMore('aa ', 'aa')).toEqual(true);
    });

    test('должна вернуть false для пустых строк (\'\', \'\')', () => {
        expect(isMore('', '')).toEqual(false);
    });

    test('должна вернуть false если a пустая, b нет (\'\', \'a\')', () => {
        expect(isMore('', 'a')).toEqual(false);
    });

    test('должна выбросить TypeError если аргумент не строка', () => {
        expect(() => isMore('hello')).toThrow(TypeError);
    });
}
)
