// interface ProcessIdentity<T, U> {
//   (value: T, message: U): T;
// }

// function processIdentity<T, U> (value: T, message: U) : T {
//   console.log(message);
//   return value
// }

// let processor: ProcessIdentity<number, string> = processIdentity;
// let returnNumber = processor(100, "Olá");
// let returnString = processor("Olá", 100); // Type check error: Argument of type "string" is not assignable to parameter of type "number".