class Foo {
    constructor(prop){
        this.prop = prop;
    }

    static staticMethod(){
        return 'staticMethod';
    }

    prototypeMethod(){
        return this.prop;
    }
}
console.log(Foo.staticMethod());

//정적 메소드는 클래스의 인스턴스 생성없이 클래스의 이름으로 호출하며 클래스의 인스턴스로 호출할 수 없다.
// 자바와 동일하지만 JS기준으로 이해해보자.

class Foo2{}

console.log(typeof Foo2); // function -> Class 도 function이다.

// Foo 클래스를 ES5로 정확히 동일하게 작성해보자
var Foo = (function(){
    //생성자 함수
    function Foo(prop){
        this.prop = prop;
    }
    Foo.staticMethod = function(){
        return 'staticMethod';
    };
    
    Foo.prototype.prototypeMethod = function(){
        return this.prop;
    };

    return Foo;
}());// 실행을 왜하는 걸까? JS Context 때문이겠지? 즉시실행을 함으로써 Context적 의미가 반영되서 Foo라는 변수에 할당되는거겠지? 뭔소리지?  

// 함수 객체만 가지고있는 prototype 프로퍼티는 함수 객체가 생성자로 사용될 때, 이 함수를 통해 생성된 객체의 부모 역할을 하는 프로토타입 객체를 가리킨다.
var foo = new Foo(123);
console.log(foo.prototypeMethod());
console.log(Foo.staticMethod());
console.log(Foo.prototype === foo.__proto__); // true
console.log(Foo.prototype.constructor === Foo); // true : 생성자 함수 Foo의 prototype 프로퍼티가 가리키는 프로토타입 객체(->[[Prototype]]이구나)
                                                //가 가지고있는 constructor 프로퍼티는 생성자 함수 Foo를 가리킨다.
        //정적 메소드인 staticMethod는 생성자 함수 Foo의 메소드(함수는 객체이므로 메소드를 가질 수 있다.)이고, 
        //일반 메소드인 prototypeMethod는 프로토타입 객체 Foo.prototype의 메소드이다.