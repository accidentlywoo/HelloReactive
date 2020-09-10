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
        this.setState({count: this.state.count + 1});
    }
    render(){
        return(
            `<p>안녕하세요!${this.state.count}</p>`
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));