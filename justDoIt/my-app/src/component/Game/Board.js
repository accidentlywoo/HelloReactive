import React from 'react';
import Square from './Square';

class Board extends React.Component {
    constructor(props){
        // 자식놈들이 서로 통신하게하려면 부모 컴포넌트에 공유 state를 정의해야한다.
        // -< 컴포넌트들이 서로 또는 부모 컴포넌트와 동기화 하도록 만든다.
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick(i){
        const squares = this.state.squares.slice();// 원본 보호
        squares[i] = 'x';
        this.setState({squares: squares});
    }

    renderSquare(i) { 
        return <Square 
            value ={this.state.squares[i]}
            onClick={() => this.handleClick(i)}     
        />
    }
    render(){
        const status = 'Next player : X';
        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;