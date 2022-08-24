// const fib = (n) => {
//  if(n <= 2) return 1;
//  return fib(n-1) + fib(n-2);
// };

// console.log(fib(8));
// console.log(fib(7));

//time complexcdity will be like that
// O(2^n)
// space will be
// O(n)
// so if we need fib of 50 ==> the time will take O(2^50) = 1,258,6269025 it's too long
// in this case we will need to make this time way shorter
// to solve this we will use memoization
// we are going to save our results in an object which will has the key value pair
// in this case we will save each branch of the tree inside that object
// const fib = (n, memo={}) => {
//     if ( n in memo) return memo[n];
//     if ( n <= 2) return 1;
//     memo[n] = fib( n-1,  memo) + fib(n-2, memo)
//     return memo[n]
// }
// console.log(fib(50));

// const myName = "Ahmed";

// function first() {
//   if (age >= 30) {
//     const age = 34;
//     var millenial = ture;
//   }

//   function second() {
//     const job = "Web developer";
//     console.log(`${myName} is a ${age}-old `);
//   }
//   second();
// }
const a = "Ahmed";
first();
function first() {
  const b = "Hello";
  second();

  function second() {
    const c = "Hi";
    third();
  }
}
function third() {
  const d = "Hey!";
  console.log(d + a + b + c);
}
