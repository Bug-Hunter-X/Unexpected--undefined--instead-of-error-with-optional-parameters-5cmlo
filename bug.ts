function printName(name?: string): void {
  console.log(name);
}

printName(); // This will print 'undefined' instead of throwing an error because of the optional parameter.