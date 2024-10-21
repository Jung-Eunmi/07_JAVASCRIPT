/*
    java case
     -if(조건문)
     - ex) int x = 10;
           if(x) -> 안된다.
    
    java case
     -> 된다.

    자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy(참으로 평가되는 값)과 Falsy(거짓으로 평가되는 값)으로 구분을 해준다.
    Falsy 값은 정해져있다.
     - false, undefined, null, 0, NaN, ''  (Falsy 인 것만 외워두기)
       이것들은 fFalsyalsy 값이며 이것을 제외한 모든 값은 Truthy 값이다.
*/

if(true) console.log('동작확인');
if(false) console.log('동작확인');
if(undefined) console.log('동작확인');
if(4) console.log('동작확인');
if('') console.log('동작확인');