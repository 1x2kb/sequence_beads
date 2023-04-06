import { describe, expect, test } from "vitest";
import conjugateSequence from "./conjugate-sequence";

describe('conjugate sequence should', () => {
    test('conjugate example 1', () => {
        let nums = [5, 3, 1];
        let expected = [3, 2, 2, 1, 1];
        let result = conjugateSequence(nums);
        expect(result).toEqual(expected);
    });

    test('conjugate example 2', () => {
        let nums = [4, 2, 2];
        let expected = [3, 3, 1, 1];
        let result = conjugateSequence(nums);
        expect(result).toEqual(expected);
    });

    test('conjugate num gapped example', () => {
        let nums = [8, 7, 4, 1];
        let expected = [4, 3, 3, 3, 2, 2, 2, 1];
        let result = conjugateSequence(nums);
        expect(result).toEqual(expected);
    });
});