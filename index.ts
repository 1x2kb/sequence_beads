import conjugateSequence from "./src/conjugate-sequence";
import getBeadRepresentation from "./src/bead-representation";

let sequence1 = [5, 3, 1];
let sequence2 = [4, 2, 2];

function run() {
    let conjugate1 = conjugateSequence(sequence1);
    let conjugate2 = conjugateSequence(sequence2);

    let beadRep1 = getBeadRepresentation(conjugate1);
    let beadRep2 = getBeadRepresentation(conjugate2);

    console.log("(original; conjugate)");
    console.log(`(${sequence1}; ${conjugate1})`);
    beadRep1.forEach((beadRow) => console.log(beadRow));

    console.log("(original; conjugate)");
    console.log(`(${sequence2}; ${conjugate2})`);
    beadRep2.forEach((beadRow) => console.log(beadRow));
};

run();