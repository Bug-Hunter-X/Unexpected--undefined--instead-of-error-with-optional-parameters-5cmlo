# Unexpected 'undefined' with TypeScript Optional Parameters

This example demonstrates how optional parameters in TypeScript can lead to unexpected behavior. When a function with an optional parameter is called without providing that parameter, instead of throwing an error, TypeScript assigns 'undefined' to it. This can be particularly problematic when dealing with potentially null or undefined values in the function body, leading to runtime errors or silent failures. This behavior is different from strict languages that would enforce the parameter's existence.

## How to Reproduce

1.  Clone this repository.
2.  Run `tsc bug.ts` to compile the code.
3.  Run `node bug.js` to observe the output.

## Solution

The `bugSolution.ts` file illustrates how to mitigate this issue.