import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class  App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 1
        }
    }
    componentDidMount(){// React Lifecycle Method : Called Immediately after a component is mounted.
        this.state.count = 100; // React가 알지 못한다. 최신버전에서 Proxy기술이 있어서 접목가능성 있음.
        this.setState((state) =>({//setState()호출을 단일 업데이트로 한꺼번에 처리할 수 있다 ->  state() 호출이 비동비동기적일 수 있다.
            count: state.count + 1 //객체보다 함수를 인자로 사용하는 형태로 사용하면, 업데이트 적용 시점에서 인자를 받을 수 있다.
        }));
    }
    render(){
        return(
            <p onClick={() => this.componentDidMount()}>
             안녕하세요{this.state.count}
            </p>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));