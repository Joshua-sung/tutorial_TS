//타입 단언 (type assertion)
var a;
a=20;
a='a';

var b = a as string;
//a를 선언할때 타입을 지정해주지 않아 any타입으로 추론되었음
//그러나 코더는 최종적으로 a가 string값임을 알고있음
//따라서 as string으로 타입값을 개발자가 지정해주게되고 b에도 string으로 추론됨

//DOM API 조작에 많이 사용됨
// <div id='app'>hi</div>

var div = document.querySelector('div') as HTMLDivElement;
if (div) {
    div.innerText
}