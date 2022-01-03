// function logMessage(value: any){
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);

//|or로 union 타입을 쓸수있음
// function logMessage(value: string | number){
//     console.log (value);
// }

// logMessage('hello')
// logMessage(100)

var hojun: string | number | boolean;

function logMessage(value:string|number){
    if (typeof value =='number'){
        value.toLocaleString();
    }
    if (typeof value == 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developerr{
    name:string;
    skill: string;
}

interface Person{
    name:string;
    age: number;
}

// or 조건이어도 교집합으로 두 속성모두에 속한 것만 허용
function saySomeone(someone: Developerr | Person){
    someone.name;
}

// or 조건으로 만들었기 떄문에 두개의 interface중 하나만 만족해도 객체가 생성됨
saySomeone({name: 'dev',skill: 'web'})
saySomeone({name: 'dev',age: 20})

//and 조건으로 두 인터페이스를 묶으면 두개에 들어간 프로퍼티를 모두 포하한 형태의 객체여야만함
function tellSomeone(someone: Developerr & Person){
    someone.name;
    someone.skill;
    someone.age;
}
saySomeone({name: 'dev',skill: 'web',age:30})