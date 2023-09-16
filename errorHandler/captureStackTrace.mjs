const obj = {};
Error.captureStackTrace(obj);
console.log(obj.stack);
  
// Alternatively
function MyNewError() {
    Error.captureStackTrace(this, MyNewError);
}
  
console.log(new MyNewError().stack);