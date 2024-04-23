//스코프, 전역변수, 지역변수, 화살표함수

//1. 전역 스코프(global scope)
let x = 10;

function printX() {
  console.log(x);
}

console.log(x);
printX();   // 10

//지역 스코프(local scope)
function printX() {
  let x = 10;
  console.log(x);
}

printX();   //

//3. 블록 스코프(block scope)
if (true) {
  let x = 10;
  console.log(x);
}

console.log(x);   // ReferenceError: x is not defined

//화살표 함수

//1.기본적인 화살표 함수
let add = (x, y) => {
    return x + y;
  }
  
  console.log(add(2, 3));   // 5

  //2. 한 줄로 된 화살표 함수
let add = (x, y) => x + y;

console.log(add(2, 3));   // 5

//3. 매개변수가 하나인 화살표 함수
let square = x => x * x;

console.log(square(3));   // 9