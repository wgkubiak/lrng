const sayHello = (name = 'John', greeting = 'Hi') => {
  console.log(`${greeting} ${name}`);
  return name;
} 
 
const checkInput = (handler, ...args) => {
  handler(args[0], args[1]);
}

checkInput(sayHello, 'Wojtek', 'Welcome');
sayHello();
console.log(sayHello());