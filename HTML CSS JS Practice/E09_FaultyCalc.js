console.log("---------- Faulty Calculator ----------");

function calculator(n1, n2, oper) {
  result = eval(n1 + oper + n2);
  console.log(result);
}

let a = 20;
let b = 10;
let oper = "-";
let fault = Math.random();

if (fault < 0.1) {
  console.log(fault);
  if (oper == "+") {
    oper = "-";
  } else if (oper == "-") {
    oper = "+";
  } else if (oper == "*") {
    oper = "/";
  } else if (oper == "/") {
    oper = "*";
  } else{
    console.log("Invalid operator");
  }
}

calculator(a, b, oper);
