class Foo {
    constructor(arr = []){
        this._arr = arr;
    }
    // getter : get 키워드 뒤에 오는 메소드 이름 firstElem은 클래스 필드 이름처럼 사용된다.
    get firstElem(){
        // getter은 반드시 무언가를 반환해야 한다.
        return this._arr.length ? this._arr[0] : null;
    }

    // setter : set 키워드 뒤에 오는 메소드 이름 firstElem은 클래스 필드처럼 쓰인다.
    set firstElem(elem){
        // ... this._arr은 this._arr 를 개별 요소로 분리한다.
        this._arr = [elem, ... this._arr];
    }
}

const foo = new Foo([1, 2]);
// 필드에 fistElem에 접근하면 getter 가 호출된다.
console.log(foo.firstElem);// 1 

// 클래스 필드에 lastElem에 값을 할당하면 setter 가 호출된다.
foo.firstElem = 100;

console.log(foo.firstElem); // 100

// getter와 setter은 클래스에서 새롭게 도입된 기능이 아니다.
// getter와 setter는 접근자 프로퍼티(accessor property)
    // _arr은 데이터 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(foo, '_arr'));
// {value: Array(2), writable: true, enumerable: true, configurable: true}
    // firstElem은 접근자 프로퍼티이다. 접근자 프로퍼티는 프로토타입의 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(Foo.prototype, 'firstElem'));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}