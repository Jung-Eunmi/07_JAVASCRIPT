/*
    전역 스코프와 지역 스코프
*/

var x = 'global x';
var y = 'global y';
var z = 'global z';

function outer() {

    var z = 'outer local z';

    console.log(x);
    console.log(y);
    console.log(z);

    function inner() {
        var x = 'inner local x';
        console.log(x);
        console.log(y);
        console.log(z);
    }

    inner();

}

// console.log(z);  outer 함수의 지역변수이기 때문에 {}밖의 영역에서 사용할 수 없다.
outer();
