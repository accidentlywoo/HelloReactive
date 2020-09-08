/*
 프로토타입 객체는 constructor 프로퍼티를 갖는다. 
이 constructor 프로퍼티는 객체의 입장에서 자신을 생성한 객체를 가리킨다.
*/
function Person(name){
    this.name = name;
}
var foo = new Person('Woo');

// Person() 생성자 함수에 의해 생성된 객체를 생성한 객체는 Person() 생성자 함수
console.log(Person.prototype.constructor === Person);

// foo 객체를 생성한 객체는 Person() 생성자 함수이다.
console.log(foo.constructor === Person);

// Person() 생성자 함수를 생성한 객체는 Function() 생성자 함수이다.
console.log(Person.constructor === Function);

// 다음글 : Prototype Chain