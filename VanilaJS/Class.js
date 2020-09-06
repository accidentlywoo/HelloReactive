// 클래스는 선언문 이전에 참조할 수 없다.
console.log(Foo); // ReferenceError: Cannot access 'Foo' before initialization

class Foo {}

/*
 하지만 호이스팅이 발생하지 않는 것은 아니다.
 let, const 키워드로 선언한 변수처럼 호이스팅된다.
 */

 const Foo = '';
 {
    console.log(Foo);// ReferenceError: Cannot access 'Foo' before initialization
    // -> Temporal Dead Zone; TDZ에 빠진다.
    //호이스팅이 발생하지 않았다면 ''출력되야한다. 
    class Foo{}
 }
 // 함수 표현식과 마찬가지로 클래스 이름을 외부 코드에서 접근 불가능하다.
    // 클래스명 MyClass는 함수 표현식과 동일하게 클래스 몸체 내부에서만 유요한 식별자이다.
 const Foo = class MyClass{};

 const foo = new Foo();
 console.log(foo); // MyClass{}

 new MyClass(); // ReferenceError: MyClass is not defined

 // [인스턴스 생성]
 class Foo{}
 const foo = new Foo(); // Foo는 클래스이름이 아니라 생성자이다.

 console.log(Object.getPrototypeOf(foo).constructor === Foo); // True

 //new 연산자를 사용하지 않고 constructor를 호출하면 타입 에러(TypeError)가 발생한다.
// 생성자는 new 연산자 없이 호출할 수 없다. 
class Foo {}
const foo = Foo(); // TypeError: Class constructor Foo cannot be nivoked without 'new'
