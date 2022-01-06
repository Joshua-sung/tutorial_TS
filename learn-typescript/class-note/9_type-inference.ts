interface shops<T> {
    value: T;
    title: string;
}

//extends 를 통해 interface 상속
interface detailshop<K> extends shops<K>{
    tag: K;
    price: number;
}

let shopdetail: detailshop<number> = {
    title:'jeamok',
    price:1000,
    tag:3,
    value:5
}

//language server가 IDE에 갖춰져 있어서 타입추론을 vscode에서 해줄수있는것