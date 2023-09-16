console.log("This program demonstrates "
            + "stack trace in Node.js");
var err = new Error(123)

console.log(err, err.length); // Error, undefined
console.log(err.stack, err.stack.length); // Error string, 377

console.log(typeof err.stack); // string

console.trace(123) // Trace