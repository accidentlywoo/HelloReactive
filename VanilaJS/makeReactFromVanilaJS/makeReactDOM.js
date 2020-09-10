import React from 'react'; // JSX 이해를 위해

function renderElement(node){ // recursive
    if(typeof node === 'string'){
        return document.createTextNode(node);
    }
    const el = document.createElement(node.type);

    node.children.map(renderElement).forEach(element => {
        el.appendChild(element);
    });
    return el;
}
function render(vdom, container){ // vdom으로 들어오는 친구들의 대-소문자 구별은 중요하다.
    // 실제 React Production에서는 이부분에
    // Diff 알고리즘으로 구현한 변경감지 알고리즘이있다.
    // -> 변경 부분만 선택적으로 랜더링한다
    container.appendChild(renderElement(vdom));
}
/* @jsx createElement */ 
// JSX주석을 통해 Babel이 React.createElement(type, props = {}, ... children) -> createElement(type, props = {}, ... children)
// 형태로 컴파일되고 리액트 컴포넌트로 실행된다.
function createElement(type, props = {}, ... children){
    if(typeof type === 'function'){
        return type.apply(null, [props, ...children]);
    }
    return { type, props, children }
}

function StudyList(){
    return (
        <ul>
            <li className="item">React</li>
            <li className="item">Redux</li>
            <li className="item">TypeScript</li>
            <li className="item">mobx</li>
        </ul>
    )
}
function App(){
    // const vdom = createElement('ul', {}, createElement('li', {}, 'React'));
    return (
        <div>
            <h1>Hello</h1>
            <StudyList item="abcd" id="haha"/>
            <p>
            사용자 컴포넌트는 대문자로 시작
            -> 대문자로 시작하는 컴포넌트는 함수로 사용 
            </p>
        </div>
    );
}

console.log(<App />);
render(<App />, document.getElementById("root"));
