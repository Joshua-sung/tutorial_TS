//생성자 함수를 통한 상속
function Person(name,age){
    this.name = name;
    this.age = age;
}

var capt = new Person('캡틴',100);

//class를 통한 상속
class Person {
    constructor(name,age){
        console.log ('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

var seho = new Person('세호',30);//constructor 생성되었습니다. 출력
console.log(seho);