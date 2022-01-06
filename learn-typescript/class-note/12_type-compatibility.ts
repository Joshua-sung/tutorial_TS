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
geabal = saram;
saram =  geabal;
//interface든 class든 부분집합 관계여야만 타입이 맞게 정의되어 에러가안남
geabal = new personali();

//interface 내부의 속성과 타입에 대해서 비교하는 것이 구조적 타입호환

