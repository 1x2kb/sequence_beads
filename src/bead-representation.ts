function getBeadRepresentation(sequence: number[]): string[] {
    if (!sequence) return [];
    return sequence.map((sequenceItem: number) => {
        let str = "";
        for (let i = 0; i < sequenceItem; ++i) {
            str += "o";
        }

        return str;
    })
}

export default getBeadRepresentation;