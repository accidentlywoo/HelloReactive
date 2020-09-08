/*
자바스크립트는 특정 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티
또는 메소드가 없다면 [[Prototype]]이 가리키는 링크를 따라 자신의 부모 역할을
하는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색한다.
이것은 프로토타입 체인이라한다. 
*/
var student = {
    name : 'Lee',
    score: 90
}

// Object.prototype.hasOwnProperty()
console.log(student.hasOwnProperty('name')); 
/*
student 객체는 hasOwnProperty 메소드를 가지고 있지 않으므로 에러가 발생해야 하나
정상적으로 결과가 출력되었다. 
*/
console.dir(student);
console.log(student.hasOwnProperty('name')); // true
console.log(student.__proto__ === Object.prototype); // true
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true

/*
    객체 생성 방법 3가지!
    - 객체 리터럴
    - 생성자 함수
    - Object() 생성자 함수

객체 리터럴 방식으로 생성된 객체는 결국 내장 함수(Built-in)인 Object() 생성자 함수로
객체를 생성하는 것을 단순화시킨 것이다. 자바스크립트 엔진은 객체 리터럴로
객체를 생성하는 코드를 만나면 내부적으로 Object() 생성자 함수를 사용하여 객체를 생성한다.

Object() 생성자 함수는 물론 함수이다. 따라서 함수 객체인 Object()생성자 함수는 일반 객체와
달리 prototype 프로퍼티가 있다.

    - prototype 프로퍼티는 함수 객체가 생성자로 사용될 때 이 함수를 통해 생성된 객체의
      부모 역할을 하는 객체, 즉 프로토타입 객체를 가리킨다.
    - [[Prototype]]은 객체의 입장에서 자신의 부모 역할을 하는 객체, 즉 프로토타입 객체를 가리킨다.
*/
var person = {
    name: 'Lee',
    gender: 'male',
    sayHello : function(){
        console.log('Hi! my name is ' + this.name);
    }
};

console.dir(person);
console.log(person.__proto__ === Object.prototype);
console.log(Object.prototype.constructor === Object);
console.log(Object.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
// -> 객체 리터럴을 사용하여 객체를 생성한 경우, 그 객체의 프로토타입 객체는 Object.prototype이다.

