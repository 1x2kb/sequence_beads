import { describe, expect, test } from "vitest";
import getBeadRepresentation from "./bead-representation";

describe('get bead representation should', () => {
    test('return the correct orientation for example 1', () => {
        let array = [3, 2, 2, 1, 1];
        let expected = ["ooo", "oo", "oo", "o", "o"];
        let result = getBeadRepresentation(array);
        expect(result).toEqual(expected);
    });

    test('return the correct orientation for example 2', () => {
        let array = [3, 3, 1, 1];
        let expected = ["ooo", "ooo", "o", "o"];
        let result = getBeadRepresentation(array);
        expect(result).toEqual(expected);
    });
});