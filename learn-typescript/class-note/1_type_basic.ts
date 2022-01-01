//변수 지정하기

//문자열로 지정
const str: string  = 'hi';
//숫자로지정
let num: number = 10;
//배열로지정
let arr: Array<number> =[1,2,3];

let heros : Array<string> = ['a','s','b'];
//배열안에 숫자가 들어감을 지정
let items: number[] = [1,2,3]
//객체형태로 배열이 들어감을 지정
let address: [string,number] = ['seoul',1];
//객체라고 지정
let obj: object = {};

let a:boolean = true


//함수 기본

//파라미터에 타입을 정의하는 방식 
function sum(a:number, b:number){
    return a + b ;
}

//함수의 값에 타입을 정의하는 방식
function add():number{
    return 10;
}
//함수의 타입을 정의하는 방식
function hab(a:number, b:number):number{
    return a + b ;
}

