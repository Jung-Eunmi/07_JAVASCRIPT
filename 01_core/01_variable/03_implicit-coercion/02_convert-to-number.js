/*
    2. 숫자 타입으로 암묵적 타입 변환
*/

// 산술연산자의 피연산자는 숫자여야 하기 때문에 
// 숫자가 아닌 피연산자를 숫자로 암묵적으로 변환한다.
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % '5');

// 피연산자가 숫자로 변환할 수 없는 것은 NaN 
console.log(10 * 'hi');

console.log('======================================');

// + 단항연산자로 숫자가 아닌 타입을 변환할 수 있다.
console.log(+'');           // 빈문자열 -> 0
console.log(+'10');         // 10
console.log(+'java');       // 숫자로 변환 불가한 문자열 NaN
console.log(+true);         // true : 1
console.log(+false);        // false : 0
console.log(+null);         // 0
console.log(+undefined);    // NaN
console.log(+{});           // NaN
console.log(+[]);           // 0 -> 빈 배열은 0 변환이 된다.
console.log(+function(){}); // NaN