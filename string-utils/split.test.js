import { describe, test, expect } from "bun:test";
import { split } from "./split.js";

describe("split", () => {
    test("разделяет строку по символу", () => {
        expect(split("a-b-c", "-")).toEqual(["a", "b", "c"]);
    });

    test("разделяет строку по пробелу", () => {
        expect(split("hello world", " ")).toEqual(["hello", "world"]);
    });

    test("возвращает исходную строку, если разделитель не найден", () => {
        expect(split("hello", ",")).toEqual(["hello"]);
    });

    test("обрабатывает разделитель в начале строки", () => {
        expect(split("-a-b", "-")).toEqual(["", "a", "b"]);
    });

    test("обрабатывает разделитель в конце строки", () => {
        expect(split("a-b-", "-")).toEqual(["a", "b", ""]);
    });

    test("обрабатывает несколько разделителей подряд", () => {
        expect(split("a--b", "-")).toEqual(["a", "", "b"]);
    });

    test("обрабатывает строку только из разделителей", () => {
        expect(split("---", "-")).toEqual(["", "", "", ""]);
    });

    test("обрабатывает пустую строку", () => {
        expect(split("", "-")).toEqual([""]);
    });

    test("обрабатывает строку без разделителей", () => {
        expect(split("abc", "-")).toEqual(["abc"]);
    });
});

