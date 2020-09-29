import React from 'react';

class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {// 컴ㅍㅎ넌트를 클릭한 것을 기억하게 만들어 X표시를 채워 넣자!
            value:null,
        };
    }
    render(){
        return(
            <button 
                className="square" 
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        )
    }
}

export default Square;