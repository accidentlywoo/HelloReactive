// Pass-By-Reference
/*
 JS는 원시타입 제외하고 모든 타입은 객체이다. 객체는 Mutable(Java동일)
따라서 객체 타입은 동적으로 변화할 수 있으므로 어느 정도의 메모리 공간을 확보해야 하는지 예측할 수 없기 떄문에
런타임에 메모리 공간을 확보하고 메모리의 힙 영역에(heap Segment)에 저장된다.
 이에 반해 원시타입은 값(value)으로 전달된다. 즉, 복사된다. 이를 pass-by-value라고 한다.
-> 자바와 동일. 자바에선 Pass-By-Reference라는 표현을 쓰지않고 Call By Value라는 용어를 사용한다.
변수에 저장된(Stack Segment) 포인터의 정보를 전달하기 때문에 Reference를 직접적으로 전달한다고 표현하지 않는다. 
*/
// Pass-by-reference
var foo = {
    val: 10
  }
  
var bar = foo;
console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // true

bar.val = 20;
console.log(foo.val, bar.val); // 20 20
console.log(foo === bar);      // true

var foo = { val: 10 };
var bar = { val: 10 };

console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // false

var baz = bar;

console.log(baz.val, bar.val); // 10 10
console.log(baz === bar);      // true

var a = {}, b = {}, c = {}; // a, b, c는 각각 다른 빈 객체를 참조
console.log(a === b, a === c, b === c); // false false false

a = b = c = {}; // a, b, c는 모두 같은 빈 객체를 참조
console.log(a === b, a === c, b === c); // true true true

// Pass-by-value
var a = 1;
var b = a;

console.log(a, b);    // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b);    // 1  10
console.log(a === b); // false