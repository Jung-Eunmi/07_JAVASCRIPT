/*
    프로퍼티의 값 변경, 추가, 삭제
*/

var panda = {
    name : '푸바옹'
}

// 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
panda.name = '아이바옹';
console.log(panda);

// 프로퍼티 동적으로 추가하기
panda.age = 7;  // 존재하지 않는 프로퍼티에 값을 할당하게 되면 프로퍼티가 동적으로 생성되어 추가된다.
console.log(panda);

// 프로퍼티 삭제
// delete 연산자를 사용해서 삭제할 수 있다.
delete panda.age;
delete panda.eat;   // 없는 프로퍼티를 삭제하려고해도 에러발생이 아닌 무시가 된다.
console.log(panda);