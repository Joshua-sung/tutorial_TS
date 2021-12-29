const str: string  = 'hi';

let num: number = 10;

let arr: Array<number> =[1,2,3];

let heros : Array<string> = ['a','s','b'];

let items: number[] = [1,2,3]

let address: [string,number] = ['seoul',1];

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
