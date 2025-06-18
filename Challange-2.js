//write a function that returns the some of two numbers that all numbers all numbers reguadless of param
/**
 * for param1= 1 and param2= 2, the output should be add(param1 + param2) = 3
 *
 * and there must have to Arithmatic operators, rest operator and forEach()
 */

//Method one and simple solution
function sum(param1, param2) {
  return param1 + param2;
}
const result = sum(1, 2);
console.log(result);

//Method two and expected as per Question
function totalSum(...param1) {
  let total = 0;
  param1.forEach((perElement) => {
    total += perElement;
  });
  return total;
}

const finalResutl = totalSum(1, 2);
console.log(finalResutl);
