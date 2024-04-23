//함수 정의하기
//input,output

//1.  함수 선언문(function declaration)
function add(x, y) {
    return x + y;
  }
  
  console.log(add(2, 3));   // 5

//2. 함수 표현식(function expression)
let add = function(x, y) {
  return x + y;
}


//함수를 호출한다 (=사용한다)
//함수명()-> add(입력값)
//console.log(add(2, 3)); 

//let functionResult =add(3,4);
//console.log(functionResult);

//add2를 가지고 10과 20을 더한 값을 출력해보세요!
let functionResult2 =add2(10,20)
console.log(functionResult2);

//함수의 input -> 매개변수(매개체가 되는 변수!)
