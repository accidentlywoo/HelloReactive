// JS의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되있다.
// 이러한 부모 객체를 Prototype(프로토타입) (객체)이라고 한다.

var student = {
    name : 'Lee',
    score : 90
};

console.log(student.hasOwnProperty('name'));

console.dir(student);
// JS의 모든 객체는 [[Prototype]]이라는 인터널 슬롯(Internal slot)을 가진다.
/*
[[Prototype]]의 값은 null 또는 객체이며 상속을 구현하는데 사용된다.
[[Prototype]]객체의 데이터 프로퍼티는 get 액세스를 위해 상속되어 자식 객체의 프로퍼티처럼
사용할 수 있다. 하지만 set 액세스는 허용되지 않는다.
 [[Prototype]]의 값은 Prototype 객체이며 __proto__accessor property로 접근할 수 있다.
 __proto__프로퍼티에 접근하면 내부적으로 Object.getPrototypeOf가 호출되어 프로토타입 객체를 반환한다.

 student 객체는 __proto__ 프로퍼티로 자신의 부모 객체(프로토타입 객체)인 Object.prototype을 가리키고있다.
*/
console.log(student.__proto__ === Object.prototype); // true
// 객체를 생성할 떄 프로토타입은 결정된다.
//결정된 프로토타입 객체는 다른 임의의 객체로 변경할 수 있다.

// [[Prototype]] vs prototype 프로퍼티
/*
모든 객체는 자신의 프로토타입 객체를 가리키는 [[Prototype]] 인터널 슬롯(Internal slot)을 갖으며 상속을 위해 사용된다.

함수도 객체이므로 [[Prototype]] 인터널 슬롯을 갖는다. 그런데 함수 객체는 일반 객체와 달리
prototype 프로퍼티도 소유하게 된다.
> 주의점 > prototype 프로퍼티는 프로토타입 객체를 가리키는 [[Prototype]]인터널 슬롯은 다르다.
prototype 프로퍼티와 [[Prototype]]은 모두 프로토타입 객체를 가리키지만 관점의 차이가 있다.
*/

function Person(name){
    this.name = name;
}

var foo = new Person('Lee');

console.dir(Person); // prototype 프로퍼티 O
console.dir(foo); // prototype 프로퍼티 X  그거말고도 많이 다른디?

// [[Prototype]]
/*
    - 함수를 포함한 모든 객체가 가지고 있는 인터널 슬롯이다.
    - 객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리키며 함수 객체의 경우
      Function.prototype를 가리킨다. 
      -> 생성자 함수로 생성된 객체의 프로포타입 체인 참조
*/
console.log(Person.__proto__ === Function.prototype);

// prototype 프로퍼티
/*
    - 함수 객체만 가지고 있는 프로퍼티이다.
    - 함수 객체가 생성자로 사용될 때 이 함수를 통해 생성될 객체의 부모 역할을 하는 객체(프로토타입 객체)를 가리킨다.
*/
console.log(Person.prototype === foo.__proto__);
// 다음 글 : constructor property