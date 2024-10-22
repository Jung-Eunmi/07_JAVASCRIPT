/*
    함수 내부에 함수를 정의하는 것을 중첩함수 혹은 내부 함수라고 한다.
*/

/*
    일반적으로 중첩 함수의 경우 자신을 포함하는 외부 함수를
    도와주는 헬퍼 함수의 역할을 하게 된다.
*/

function outer() {

    var outerval = '외부함수가 가지고 있는 변수';

    function inner() {

        var innerval = '내부함수가 가지고 있는 변수';
        // 외부 함수의 변수를 참조할 수 있다. (외부함수 영역 내에 있기때문에)
        console.log(innerval, outerval);
    }

    // console.log(innerval); 내부 함수의 변수는 외부 함수 스코프에서 사용할 수 없다.
    inner();
}

// inner();
outer();