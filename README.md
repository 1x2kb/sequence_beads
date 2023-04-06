# sequence_beads

## Background
A collection of positive integers can be represented by rows of beads in non-increasing order, each row having the corresponding number of beads. The rows and columns of the resulting bead representation can then be flipped, to form its conjugate representation.

| Collection of positive integers | Bead representation | Conjugate bead representation | Conjugate collection of integers|
|---------------------------------|---------------------|-------------------------------|---------------------------------|
|{ 5, 3, 1 }                      | ooooo<br>ooo<br>o   | ooo<br>oo<br>oo<br>o<br>o     |{ 3, 2, 2, 1, 1 }                |
|{ 4, 2, 2 }                      | oooo<br>oo<br>oo    | ooo<br>ooo<br>o<br>o          |{ 3, 3, 1, 1 }                   |

## Problem
Write a program in your favorite programming language to obtain the conjugate of a collection of positive integers.

## Code Breakdown
Code is broken down into 3 parts.
1. The starting point is `index.(ts)` which can be found in the root of the project.
1. Compilable code is contained within the `src/` folder. Files are in the form `*.ts`
1. Compiled/built code is contained within the `dist/` folder. These are files compiled by the typescript compiler and can be executed by node.

## Running the program
Assuming one already has node installed the program can be run with npm start. This command will build and run the program.
