interface User{
    age : number;
    name : string;
}

//변수에 인터페이스 활용
var seho: User ={
    age: 33,
    name : '세호'
}

//함수에 인터페이스활용 파라미터에 미리 정의해둔 인터페이스를 활용

function getUser(user:User){
    console.log(user);
}

const capt ={
    name: 'cpatin',
    age : 120
}
getUser(capt);

//함수의 스팩(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number) : number;
}

let gap: SumFunction;
gap = function (a: number, b: number):number{
    return a+b;
}

//인덱싱
interface stirngarray{
    [index: number]:string;
}

var brr:stirngarray = ['a','b','c'];
// brr[0] = 10

//딕셔너리 패던
interface strinigdict{
    [key: string] : RegExp
}

var cbj :strinigdict = {
    sth : /abc/,
    cssfile: /\.css$/,
    jsfile: /\.js$/,
}

Object.keys(cbj).forEach(function(value) {});

//인터페이스 확장
interface Person{
    name: string;
    age: number;
}

interface Developer extends Person{
    language : string;
}

var hulk: Developer ={
    language: 'd',
    age: 50,
    name: '헐크'
}