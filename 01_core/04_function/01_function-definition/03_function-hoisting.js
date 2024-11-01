/*
    함수의 호이스팅
*/

console.log(hello); // (2)
console.log(hi); // (3)

console.log(hello('정은미')); // (4)
// console.log(hi('정은미')); (5) 값을 할당하기 전에 공간만 만들어주는것이기 때문에 hi엔 값이 할당되지않음

// 함수 선언문 (1)
function hello(name) {
    return `${name} 님 헬로우~~`;
}

// 함수 표현식
// (1) // (6)
var hi = function(name) {
    return `${name} 님 하잉~~`;
}

console.log(hi('정은미')); // (7) 함수표현식에 값 할당
/*
    자바스크립트는 특이하게 선언 과정과 값 할당 과정 이렇게 따로따로 동작을 하게된다.
    선언은 코드를 run 하는 동시에 가장 먼저 선언 구문을 메모리에 할당하게 된다.
    선언 구문이 마무리가 되면 그 후에 위에서부터 아래로 코드가 진행함에 따라 값을 할당하는 과정이 실행된다.

    값을 할당하는 과정은 코드가 진행함에 따라 실행되기 때문에
    함수 표현식에 경우에는 사용하고 싶으면 함수 표현식 이후에 참조 또는 호출해야한다.
*/