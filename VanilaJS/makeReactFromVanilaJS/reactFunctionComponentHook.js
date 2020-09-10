import React, { useState } from 'react'; // useState -> Hook
import ReactDOM from 'react-dom';

function App(){
    const [count, setCount] = useState(1);
    const [age, setAge] = useState(19);

    const increament = () => {
      setCount ( preCounter => preCounter + 1);
    }
    const eatAge = () => {
        setAge (preAge => preAge + 1);
    }
    return (
        <div>
            <h1 onClick={() => increament()}>상태 { count }</h1>
            <span onClick={() => eatAge()}>나이는{age}</span>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));