// ES5
var Person = (function(){
    //Constructor
    function Person(name){
        this._name = name;
    }

    // public method
    Person.prototype.sayHi = function(){
        console.log('Hi '+ this._name);
    };

    // return constructor
    return Person;
}());

var me = new Person('Woo');
me.sayHi();

console.log(me instanceof Person);

// ES6
// 클래스 선언문
class Person2 {
    // Constructor (생성자)
    constructor(name){
        this._name = name;
    }
    sayHi(){
        console.log(`Hi ${this._name}`);
    }
}
// 인스턴스 생성
const me = new Person2('Woo');
me.sayHi(); 

console.log(me instanceof Person2);