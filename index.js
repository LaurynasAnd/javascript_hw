/*
    1. Write two binary functions, add and mul, that take two numbers and return their sum and product. 

    add(3, 4);    //  7  
    mul(3, 4);    // 12
    
*/

// Your code here:
  function add(a, b){
    return a+b;
  }
function mul(a,b){
  return a*b;
}

console.log('1: ',add(3, 4));
console.log('1: ',mul(3, 4));


/*
    2. Write a function that takes an argument and returns a function that returns that argument.  

    const idf = identify(3);
    idf();    // 3
*/
function identify(a){
  return function(){
    return a;
  }
}
var idf = identify(3);
console.log('2: ',idf());

/*
    3. Write a function addf that adds from two invocations.
    
    addf(3)(4);    // 7
*/
function addf(a){
    return (b) => a+b;
  }
  console.log('3: ',addf(3)(4));
  
  /*
      4. Write a function that takes a binary function, and makes it callable with two invocations.
  */    
const add2 = applyf(add);
        

function applyf(func){
    return (a) => ((b) => func(a, b));

}
console.log('4: ',add2(3)(4)); // 7
console.log('4: ',applyf(mul)(5)(6));    // 30)
  
  
  /*
      5. Write a function that takes a function and an argument, and returns a function that can supply a second argument.  
  */
      const add3 = curry(add, 3);  
console.log('5: ',add3(4));             // 7  
console.log('5: ',curry(mul, 5)(6));    // 30  

function curry(func, a){
    return (b) => (func(a, b));
}



  /*
      6. Write a function twice that takes a binary function and returns a unary function that passes its argument to the binary function twice.
  */    
      const double = twice(add);  
console.log('6: ',double(11));    // 22  
      const square = twice(mul);  
console.log('6: ',square(11));    // 121
function twice(func){
    return (a)=>func(a, a);
}
  
  
  
  /*
      7. Write a function composeu that takes two unary functions and returns a unary function that calls them both. 
      */
  
console.log('7: ',composeu(double, square)(3));    // 36
function composeu(double, square){
    return (x) => square(double(x));
}
  
  
  /*
      8. Write a function that adds from many invocations, until it sees an empty invocation.
  
    */
// console.log(addg(3)(4));     // 7
console.log('8: ',addg(3)(4)(5)());     // 12 
console.log('8: ',addg(1)(2)(4)(8)());  // 15

function addg(a){
    let sum = a;
    return function inner(b){
        if(undefined === b) return sum;
        sum += b;
        return inner;
    }
}


  /*
      9. Write a function that will take a binary function and apply it to many invocations.
  */
console.log('9: ',applyg(add)(3)(4)(5)());       // 12 
console.log('9: ',applyg(mul)(1)(2)(4)(8)());    // 64
  
function applyg(fn){
  return function inner1(a){
    let res = a;
    return function inner2(b){
        if(undefined === b) return res;
        res = fn(res, b);
        return inner2;
    }
  }
}
  
  
  /*
      10. Make a function that returns a function that will return the next fibonacci number.
  */
console.log('10-------');
      const fib = fibonaccif();  
console.log(fib());    // 0  
console.log(fib());    // 1  
console.log(fib());    // 1  
console.log(fib());    // 2  
console.log(fib());    // 3  
console.log(fib());    // 5
console.log(fib());    // 8
console.log(fib());    // 13
console.log(fib());    // 21
console.log(fib());    // 34
  
function fibonaccif(){
    let i = 0;
    let j = 1;
    return function () {
        const ans = i;
        const temp = i+j;
        i = j;
        j = temp;
        return ans;
    }
}
 
  