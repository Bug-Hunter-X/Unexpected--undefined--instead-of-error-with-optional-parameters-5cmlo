function printName(name: string | undefined): void {
  if (name === undefined) {
    throw new Error('Name is required');
  } else {
    console.log(name);
  }
}

// Example usage: 
try {
  printName();
} catch (error) {
  console.error(error.message);
}

printName('John');