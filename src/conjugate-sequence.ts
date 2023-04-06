function conjugateSequence(sequence: number[]): number[] {
    if (sequence.length === 0) return []; // Can't find first element on an empty array. Return immediately to prevent crash.

    let array = [];
    for (let i = 0; i < sequence[0]; ++i) {
        let num = sequence.reduce((accumulator, next) => {
            if (next >= i + 1)
                return accumulator + 1;

            return accumulator;
        }, 0);

        array.push(num);
    }

    return array;
}

export default conjugateSequence