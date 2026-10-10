//Numeric Separators
let billion =1_000_000_000;
let binaryseparator = 0b1010_1011_1100;
let hexseparator = 0xFF_FF_FF;
//BIGINT 
let big = 123567890123567890n;
let big2 = BigInt(12356789012356789023);
let bignum = BigInt(42);

console.log("Billion:", billion);
console.log("Binary with separator:", binaryseparator);
console.log("Hexadecimal with separator:", hexseparator);
console.log("BigInt:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:", bignum);
