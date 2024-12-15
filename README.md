# Type 'string[]' is not assignable to type 'string'
This TypeScript code demonstrates a common type error where an array of strings is passed to a function expecting a single string.
The function `greeter` expects a single string as input, but the variable `user` is an array of strings.
The solution involves either modifying the function to accept an array or modifying the variable to provide a single string.