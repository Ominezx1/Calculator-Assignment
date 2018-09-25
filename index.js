// 
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// div() divides saved values and returns the result.
// sqr() squares the saved values each and its product.
let calculator = {
  num1: parseInt(prompt('Please Enter num1'), 10),
  num2: parseInt(prompt('Please Enter num2'),10),
  read:() =>{
    calculator.num1;
    calculator.num2;
    },
  sum:() => {
    const sum = calculator.num1 + calculator.num2;
    return sum;
  },
  mul:() =>{
   const mul = calculator.num1 * calculator.num2;
     return mul;  
  },
  div:() =>{
   const div = calculator.num1 / calculator.num2;
     return div;  
  },
  sqr:()=>{
    const sqr = "num1<sup>2</sup>=";
     return mul;  
  }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
alert( calculator.div() );

    

