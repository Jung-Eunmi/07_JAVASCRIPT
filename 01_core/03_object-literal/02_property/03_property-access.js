/*
    프로퍼티에 접근하는 방법
     1. 마침표 표기법(.)
     2. 대괄호 표기법([])
*/

var panda = {
    name : '푸바오',
    eat : function(food){
        console.log(`${this.name}는 ${food}(을)를 맛있게 먹어요`)
    }
};

// 마침표 표기법 확인
console.log(panda.name);

// 대괄호 표기법 확인 -> 프로퍼티 키는 반드시 따옴표로 감싼 문자열 사용
console.log(panda['name']);
panda['eat']('죽순');

// 대괄호 표기법을 쓸 수 밖에 없는 상황 발생
var obj = {
    'dash-key' : 'value',
    0 : 1
};

// console.log(obj.dash-key); 프로퍼티의 키가 네이밍 규칙을 위반(특수기호)하는 경우 마침표 표기법 사용 안됨
console.log(obj['dash-key']);
// console.log(obj[dash-key]); 대괄호 표기법은 꼭 ''로 key 값을 감싸줘야 됨

console.log(obj['0']);
console.log(obj[0]);    // 프로퍼티 키가 정수값으로 된 경우는 '' 로 생략해도 암묵적으로 문자열로 변환시켜줌