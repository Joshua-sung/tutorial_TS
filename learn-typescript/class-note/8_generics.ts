//<T> 제네릭 사용법 함수를 호출할때 타입을 지정해주고싶을때 사용
function logText<T>(text: T):T{
    console.log(text);
    return text;
}
logText<string>('하이');

// union타입으로 지정해주면 두개의 타입모투 결과 값으로 받을수있지만
function textlog(text: string | number){
    console.log(text);
    return text;
}
//결과 값또한 두개의 타입을 모두 갖는것 처럼 인식되어 문자열또는 숫자열에 해당하는 내장함수를 사용할수가 없음
const a = textlog('a')
textlog(10);

//제네릭을 사용하면 호출할때 지정된 타입으로 결과값도 지정할수있음

function long<T>(text: T): T {
    console.log(text);
    return text;
}
// 제네릭을 통해 결과값의 타입을 지정함으로써
const strong = long<string>('abc');
//문자열의 내장함수인 split을 사용할수있음
strong.split('')


//기존에 인터페이스로 타입을 정의했던 방식
interface drop{
    value: string;
    selected: Boolean;
}

const obje: drop = {value: 'ad', selected: false}

//제너릭으로 인터페이스에 타입을 정의하는 방식
interface drob<T>{
    value: T;
    selected: boolean;
}
const objer: drob<number> = {value: 2, selected: false}


//제네릭 타입제한 2 - 정의된 타입 이용하기 
//extends 상위에 정의되있는 키워드를 사용할때 씀
interface lengthtype{
    length: number
}
function logtextlength<T extends lengthtype>(text : T):T{
    text.length;
    return text;
}

// logtextlength(10); 숫자는 length 함수가 없어 에러발생
logtextlength({length: 10}) // 객체안에 length를 정의해주면 사용가능

//제너릭 타입제한 3 kyeof
interface shoppingitems{
    name: string;
    price: number;
    stock: number;
}
//인터페이스에 정의해둔 key들 로만 설정가능 선택가능한 옵션들을 제한하는 효과
function getShppingItemOption<T extends keyof shoppingitems> (itemOption: T): T {
    return itemOption;
}
getShppingItemOption("name")
//ctrl + spacebar로 자동완성가능