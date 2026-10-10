// Topic: All Number Types in JavaScript
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
*/

// --------------------------------------------------------
// 1. INTEGER LITERALS
// --------------------------------------------------------

// Decimal (Base 10) - most common

let decimal = 100; // decimal
console.log("Decimal:", decimal);

let binary = 0b1010;
console.log("Binary:", binary);

let octal = 0o77; // base 8
console.log("Octal:", octal);

let hex = 0xFF; // hexadecimal
console.log("Hexadecimal:", hex);

//Floating poit literals

let float1 = .5; // 0.5
let float2 = -8;
let float3 = 3.14;

console.log("Float 1:", float1);
console.log("Float 2:", float2);
console.log("Float 3:", float3);

//Exponential notation

let exp1 = 1e6; // 1 * 10^6
console.log("Exponential 1:", exp1);