function Student(name, age) {

    // new 라는 키워드로 해당 함수를 호출하지 않는다면
    // 재귀함수를 이용해서 new 키워드를 붙인 함수로 실행한다.
    if(!new.target){
        return new Student(name, age);
    }
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}(은)는 ${this.age}세 입니다`
    }
};

/*
    일반 함수와 생성자 함수의 차이는 특별히 존재하지 않는다.
    따라서 생김새에 따라 구분하기 위해 생성자 함수는 대문자로 시작하려 노력하는 것이 일반적이다.
     -> new 연산자와 함께 사용하면 생성자 함수
     -> new 없이 사용하면 일반 함수
*/

// new 키워드 없이 사용
const student = Student('정은미', 30);
// new 키워드 없이 사용하게 되면 this 는 student 를 가리키는 것이 아닌 전역객체를 가리키게 된다.
console.log(student);

console.log('===================================================================');

const student2 = new Student('정은미', 30)
console.log(student2);

// new 키워드는 java 를 사용하지 않는 개발자면 어색하다.
