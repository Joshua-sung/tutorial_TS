interface dev{
    name: string;
    skill: string;
}
interface person{
    name: string;
    age: number;
}

function introduce(): dev | person{
    return {name:'tony',age: 33, skill: 'iron beam'}
}

// union type| 으로 지정되어 공통된 속성만 불러올수있음
var tony = introduce();
console.log(tony.skill); //X

// 타입 단언 만으로 처리할때

if ((tony as dev).skill){
    var skill=(tony as dev).skill;
    console.log(skill);
} else if ((tony as person).age){
    var age = (tony as person).age;
    console.log(age);
}


// 타입 가드 정의
function isdev(target: dev | person): target is dev{
    return (target as dev).skill !== undefined;
}

if (isdev(tony)){
    console.log(tony.skill);
}else{
    console.log(tony.age);
}