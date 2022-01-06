
class Personal {
    //클래스에서 사용할 멤버 변수를 정의해줘야만 사용가능
    private name: string;
    public age: number;
    readonly log: string;
    
    //파라미터에도 어떤 타입으로 받을것인지 지정가능
    constructor(name: string ,age: number){
        console.log ('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

var jeho = new Personal('세호',30);//constructor 생성되었습니다. 출력
