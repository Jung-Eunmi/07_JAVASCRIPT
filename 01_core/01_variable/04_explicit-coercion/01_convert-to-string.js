/*
    명시적 타입 변환
    개발자의 의도에 따라 코드에 변환 할 타입을 나타낸다.
     1. 내장 생성자 함수 사용(String, Number, Boolean)
     2. 내장 함수(메소드) 사용
*/

// 1. 내장 생성자 함수
console.log(String(10));

// 2. Object.prototype.toString 메소드 사용(Object 의 후손이기 때문에 Object.prototype 생략 가능)
console.log((10).toString());