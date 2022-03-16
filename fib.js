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
const fib = (n, memo={}) => {
    if ( n in memo) return memo[n]; 
    if ( n <= 2) return 1; 
    memo[n] = fib( n-1,  memo) + fib(n-2, memo)
    return memo[n]
}
console.log(fib(50));   