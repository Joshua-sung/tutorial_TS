// 인터페이스
interface devel{
    name: string;
    skill: string;
}
interface personal{
    name: string;
}

class personali{
    name: string;
}

var geabal: devel;
var saram: personal;

// 참조할 = 왼쪽의 인터페이스 내의 타입 범위가 더 넓어 포함관계가 되야함
geabal = saram; //X
saram =  geabal; //O
//interface든 class든 부분집합 관계여야만 타입이 맞게 정의되어 에러가안남
geabal = new personali(); //X

//interface 내부의 속성과 타입에 대해서 비교하는 것이 구조적 타입호환

//함수에서의 타입호환

var add = function(a:number){
    //...
}
var sum = function(a:number, b: number){
    //,,,
}

sum = add; //O
add = sum; //X

//제네릭

//인터페이스 내부의 제너릭으로 타입이 지정된게 없다면 호환가능
interface empty<T>{
    //...
}
var empty1: empty<string>;
var empty2: empty<number>;
empty1=empty2;
empty2=empty1;
//인터페이스 내부의 제너릭으로 타입이 지정된게 있다면 호환불가
interface notempty<T>{
    data: T;
}
var notempty1: notempty<string>;
var notempty2: notempty<number>;
notempty1=notempty2;//X

