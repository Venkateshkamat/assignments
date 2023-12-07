/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result = 0;
  }
  add(number){
    this.result+=number;
  }
  subtract(number){
    this.result-=number;
  }
  multiply(number){
    this.result*=number;
  }
  divide(number){
    if(number===0){
      throw new Error();
    }
    this.result/=number;
  }
  clear(){
    this.result =0;
  }
  getResult(){
    return this.result;          
  }
  calculate(str){
    const format = /[a-zA-Z]+/;
    if(format.test(str)){
      throw new Error();
    }
    str = str.replaceAll(' ','');
    str = str.split('')
    //check if string has invlaid letter throw error
    let operator = [];
    let operand = [];
  
    function priority(str){
      if(str=='*' || str=='/' ) return 2;
      if(str=='+' || str=='-' ) return 1;
      
    } 
  
    function cal(num1,num2,op){
      num1 = parseInt(num1)
      num2 = parseInt(num2)
      switch (op) {
          case "*":
          return num1*num2;        
          break;
  
          case "/":
          return num2/num1;        
          break;
  
          case "+":
          return num1+num2;        
          break;
  
          case "-":
          return num2-num1;        
          break;
      
        default:
          break;
      }
    }
  
        while(true){
        if(str[0]=='*' ||str[0]=='/' ||str[0]=='+' ||str[0]=='-' ||str[0]=='('||str[0]==')'){
  
            if(str[0]==')' && operand.length>0){
              str.shift()
              let num1 = operand.pop()
              let num2 = operand.pop()
              let op = operator.pop()
              operand.push(cal(num1,num2,op));
              operator.pop()
              
            }
            else if(operand.length==0 && str[0]==')'){
              throw new Error("Invalid closing paranthesis")
            }
           
            if(operator.length==0){
              operator.push(str.shift());
            }
            else if(priority(operator[operator.length-1])<= priority(str[0]) || operator[operator.length-1] =="("){ 
              operator.push(str.shift());
            }
            else{
              let num1 = operand.pop()
              let num2 = operand.pop()
              let op = operator.pop()
              operand.push(cal(num1,num2,op));
              
            }
        }
        else{
          operand.push(str.shift());
        }
  
  
        if(str.length==0){
          break;
        }
  
      }
  
      while(operator.length>0){
      
      let num1 = operand.pop()
      let num2 = operand.pop()
      let op = operator.pop()
      operand.push(cal(num1,num2,op));
  
      }
      return operand.pop();
  
    
  
      
  }
}

module.exports = Calculator;
