function greeter(person: string): string {
  return "Hello, " + person;
}

let user = "Jane Doe";
console.log(greeter(user));

//Alternative solution if you need to handle arrays:
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(' ');
}

let users = ["Jane", "Doe"];
console.log(greeterArray(users));