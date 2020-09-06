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
