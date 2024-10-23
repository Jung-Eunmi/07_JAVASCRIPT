/*
    length 프로퍼티의 요소의 갯수를 나타내는 
    0 이상의 정수를 value 로 가지고 있다.
*/

console.log([].length);
// 기준 배열 생성
const arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// push() : 기존 배열에 값 추가
arr.push(6);  //인자로 전달한 요소 기존 배열에 추가
console.log(arr.length);

// pop() : 기존 배열의 마지막 요소 제거
arr.pop();
console.log(arr.length);

// 길이 프로퍼티에 숫자값을 명시적으로 할당하게 되면 
// 만약 현재 배열보다 작다면 배열의 길이를 줄이게 된다.
arr.length = 3;
console.log(arr);


arr.length = 5;
console.log(arr);