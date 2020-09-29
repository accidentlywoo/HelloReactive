# VanilaJS로 만드는 React / React Hook
브라우저 실습환경에서 코드를 바로 돌려보면서 실습하니 너모 좋습니다.
 > [브라우저 실습환경 : codesandbox](https://codesandbox.io/index2)

 ## React 들어가기!
 - 리액트의 등장
 브라우저의 DOM이 불완전하기 때문에 DOM에 직접 접근해서 개발하기에 굉장한고생을 했다.
DOM에 직접 접근하지 않고 VDOM(Virtual DOM)이라는 중간다리를 만들고 VDOM을 조작하는 프레임워크 들이 생기기 시작
이것이 SPA 라이브러리인 Vue.js, React.js 이다. (SPA 프레임워크 Angular.js(?))

간단한 react 컨셉 코드 [firstReact.js 전체 코드보기](https://github.com/accidentlywoo/HelloReactive/blob/master/VanilaJS/makeReactFromVanilaJS/firstReact.js)

  React는 사용성을 위해 JSX를 사용해 사용자 정의 컴포넌트를 사용할 수 있다.
 근본적으로 JSX는 ``` React.createElement(component, props, ...children) ``` 함수에 대한 
 Syntax Sugar이다. JSX는 Babel 컴파일러를 통해 JavaScript로 변환된다.

 ***JSX 태그의 첫 부분은 React element의 타입을 결정합니다.***
 ***대문자***로 시작하는 JSX 태그는 React 컴포넌트를 지정합니다.
 대 소문자로 React 컴포넌트를 구분하는 간단한 컨셉입니다.
 
 - Element가 소문자로 시작하는 경우 내장 컴포넌트라는 것을 뜻하고, 문자열로 ```React.createElement```에 전달된다.
 - Element가 대문자로 시작하는 경우 <Foo/>와 같이 ```React.createElement(Foo)```형태로 컴파일 된다.

 이 태그들은 같은 이름을 가진 변수들을 직접 참조합니다.
 예를들어 ```<Foo />``` 와같은 JSX 표현을 쓰려고 한다면 Foo가 반드시 스코프 내에 존재해야 합니다.

 JSX는 ```React.createElement```를 호출하는 코드로 컴파일 되기 때문에 React 라이브러리 역시
 JSX 코드와 같은 스코프 내에 존재해야만 한다.

 [JSX-In-Depth](https://ko.reactjs.org/docs/jsx-in-depth.html)

> JSX의 트렌스 파일링의 이해와 VDOM 컨셉 이해 (makeReactDOM.js)

## 불변성이 왜 중요할까?
직접적인 객체 변경이나 기본 데이터의 변경을 하지 않는다면 몇 가지 이점을 얻을 수 있다.

1. 복잡한 특징들을 단순하게 만듦
    불변성은 복잡한 특징들을 구현하기 쉽개 만든다. 직접적인 데이터 변이를 피하는 것은 이전 버전의 게임 이력을 유지하고 나중에 재사용할 수 있게 만든다.

2. 변화를 감지함
    객체가 직접적으로 수정되기 때문에 복제가 가능한 객체에서 변화를 감지하는 것은 어렵다.
    감지는 복제가 가능한 객체를 이전 사본과 비교하고 전체 객체트리를 돌아야 한다.
    불변 객체에서 변화를 감지하는 것은 상당히 쉽다. 참조하고 있는 불변 객체가 이전 객체와 다르면 객체는 변한 것이다.

3. React에서 다시 렌더링하는 시기를 결정함
    불변성의 가장 큰 장점은 React에서 순수 컴포넌트를 만드는 데 도움을 준다는 것.
    변하지 않는 데이터는 변경이 이루어졌는지 쉽게 판단할 수 있으며 이를 바탕으로 컴포넌트가 다시 렌더링할지를 결정할 수 있다.

    shouldComponentUpdate()와 순수 컴포넌트를 작성하는 법에 대해 더 알아보고싶다면 성능 최적화하기를 보자. 

## Hook을 이해하기 전에..
React Component는 크게 Class 컴포넌트와 Function 컴포넌트가 있다.
Class 컴포넌트에서 상태관리는 쉬울 수 있다.
리액트 16.8에서 Hook가 새로 추가되었는데, 이는 함수형 컴포넌트에서 상태 값과 여러 React 기능을 사용할 수 있게한다.
 이는 React에서 Class를 제거할 계획은 아니다. Hook은 React 컨셉을 대체하지 않는다.
대신에 props, state, context, refs, lifecycle 같은 React개념에 좀 더 직관적인 API를 제공.
Hook은 계층 변화 없이 상태 관련 로직을 재사용할 수 있도록 도와준다.
Class 사용과 관련된 문제점을 나열하고있고, Function Component사용을 지향하는것같다.

## Effect Hook
useEffect는 함수 컴포넌트 내에서 side effects를 수행할 수 있게 해준다.
React class의 componentDisMount, componentDisUpdate, componentWillUnmount 와 같은 목적으로 제공되지만,
하나의 API로 통합된 것.

### 공부 리스트
> [구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)

> JSX의 트렌스 파일링의 이해와 VDOM 컨셉 이해 [makeReactDOM.js 전체 코드보기](https://github.com/accidentlywoo/HelloReactive/blob/master/VanilaJS/makeReactFromVanilaJS/makeReactDOM.js)
