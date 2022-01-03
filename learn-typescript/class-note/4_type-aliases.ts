interface person {
    name: string;
    age: number;
}

type saram = {
    name: string;
    age: number;
}

var seho:person ={
    name:'세호',
    age: 30
}

//타입 별칭은 새로운 타입값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할수 있게 이름을 부여하는 것
//타입별칭은 확장불가  interface는 가능