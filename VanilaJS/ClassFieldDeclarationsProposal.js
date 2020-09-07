// 2019.05 TC39 뭐냐 
//  Class Field Declarations Proposal과 Static Class Features에는 클래스에 관련한 새로운 표준안이 제안되었다.
//  - Field Declarations
//  - Private field
//  - Static public fields
class Foo {
    x = 1;
    #p = 10;
    get p(){return this.#p;}
    static y = 20;
    static #sp = 30;
    static sp(){return this.#sp;}
} 

let foo = new Foo();
console.log("private field : ",foo.p);
console.log("static y : ",Foo.y);
console.log("static private Field????????????? : ", Foo.sp());