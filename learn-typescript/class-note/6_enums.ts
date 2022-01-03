// 숫자형 이넘
enum Shoes{
    nike,
    adidas
}

let myShoes = Shoes.nike;
console.log(myShoes);
//문자형 이넘

enum bnser{
    Yes='Y',
    No='No'
}
function tellQuestion(answer: bnser){
    if (answer == bnser.Yes){
        console.log('정답입니다');
    }
    if (answer == bnser.No){
        console.log('오답입니다');
    }
}
tellQuestion(bnser.Yes)
//이넘은 드롭다운 등의 목록에서 사용하면 좋다.