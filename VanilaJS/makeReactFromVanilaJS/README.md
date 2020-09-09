# VanilaJS로 만드는 React / React Hook
브라우저 실습환경에서 코드를 바로 돌려보면서 실습하니 너모 좋습니다.
 > [브라우저 실습환경 : codesandbox](https://codesandbox.io/index2)

 ## React 들어가기!
 - 리액트의 등장
 브라우저의 DOM이 불완전하기 때문에 DOM에 직접 접근해서 개발하기에 굉장한고생을 했다.
DOM에 직접 접근하지 않고 VDOM(Virtual DOM)이라는 중간다리를 만들고 VDOM을 조작하는 프레임워크 들이 생기기 시작
이것이 SPA 라이브러리인 Vue.js, React.js 이다. (SPA 프레임워크 Angular.js(?))

> 간단한 react 컨셉 코드 (firstReact.js)

  React는 사용성을 위해 JSX를 사용해 사용자 정의 컴포넌트를 사용할 수 있다.
 근본적으로 JSX는 ``` React.createElement(component, props, ...children) ``` 함수에 대한 
 Syntax Sugar이다. JSX는 Babel 컴파일러를 통해 JavaScript로 변환된다.

 '''JSX 태그의 첫 부분은 React element의 타입을 결정합니다.'''
 '''대문자'''로 시작하는 JSX 태그는 React 컴포넌트를 지정합니다.
 대 소문자로 React 컴포넌트를 구분하는 간단한 컨셉입니다.
 
 - Element가 소문자로 시작하는 경우 내장 컴포넌트라는 것을 뜻하고, 문자열로 ```React.createElement```에 전달된다.
 - Element가 대문자로 시작하는 경우 <Foo/>와 같이 ```React.createElement(Foo)```형태로 컴파일 된다.

 이 태그들은 같은 이름을 가진 변수들을 직접 참조합니다.
 예를들어 ```<Foo />``` 와같은 JSX 표현을 쓰려고 한다면 Foo가 반드시 스코프 내에 존재해야 합니다.

 JSX는 ```React.createElement```를 호출하는 코드로 컴파일 되기 때문에 React 라이브러리 역시
 JSX 코드와 같은 스코프 내에 존재해야만 한다.

 [JSX-In-Depth](https://ko.reactjs.org/docs/jsx-in-depth.html)

> JSX의 트렌스 파일링의 이해와 VDOM 컨셉 이해 (makeReactDOM.js)
