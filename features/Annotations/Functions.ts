// Type annotation for function parameters and return type
const add = (a: number, b: number): number => {
  return a + b;
};

// Type inference for function parameters and return type
function multiply(x, y) {
  // No type inference for arguments
  return x * y;
  // Type inference works out output, but we won't use it
}

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

// Void represents the return value of functions which don't return a value (void is unit type, it has only one value)
const logger = (message: string): void => {
  console.log(message);
};

// Never represents values that should never occur. (never is bottom type. It has no value.)
const throwError = (message: string): never => {
  throw new Error(message);
};

// Void = It doesn't return any value.
const throwErr = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};
