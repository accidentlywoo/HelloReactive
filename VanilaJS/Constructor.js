/*
JS Constructor 특징
    constructor는 1개만 존재할 수 있이며, 2개이상일떄 문법에러발생
    생략가능 -> constructor(){}포함한것처럼 동작
    constructor는 인스턴스 생성과 동시에 클래스 필드의 생성과 초기화를 실행
    -> 클래스 필드 초기화해야 한다면 consttuctor를 생략하면 안된다.
*/
class Foo {
    constructor(num){
        this.num = num;
    }
}
const foo = new Foo(1);
console.log(foo); // Foo{num:1}

foo.name = 'woo'; //프로퍼티 동적할당
console.log(foo); // Foo {num:1, name:'woo'}

// 클래스 필드
class Foo{
    name = ''; // SyntaxError 발생가능 -> 최신 브라우저만 지원
    constructor(){}
}

// 클래스 필드의 선언과 초기화는 반드시 constructor 내부에서 실시한다.
class Foo {
    constructor(name = ''){
        this.name = name; // 클래스 필드의 선언과 초기화
    }
}
const foo = new Foo('Woo');
console.log(foo); // Foo {name: 'Woo'}
// 클래스 필드는 인스턴스를 통해 클래스 외부에서 언제나 참조할 수 있다.
// -> 언제나 public 이다
console.log(foo.name);