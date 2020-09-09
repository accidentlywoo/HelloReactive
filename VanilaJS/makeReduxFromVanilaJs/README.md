# VanilaJS로 만드는 Redux / React / React Hook
브라우저 실습환경에서 코드를 바로 돌려보면서 실습하니 너모 좋습니다.
 > (브라우저 실습환경 : codesandbox)[https://codesandbox.io/index2]
## Redux 란?
  Redux는 '액션'이라는 이벤트를 사용해 애플리케이션 상태를 관리하고 업데이트하기 위한 패턴 및 라이브러리이다.
 업데이트하기위한 패턴 및 라이브러리이다. 

### Redux 를 사용하면 더 유용할때는?
  - 앱의 여러 위치에서 필요한 많은 양의 애플리케이션 상태가 있다.
  - 앱 상태는 시간이 지남에 따라 자주 업데이트된다.
  - 해당 상태를 업데이트하는 논리는 복잡할 수 있다.
  - 앱은 중간 또는 큰 코드베이스를 가지고 있으며 많은 사람들이 작업 할 수 있다.

React-Redux는 React 구성 요소가 상태 조각을 읽고 저장소를 업데이트하기위한 작업을
전달하여 Redux 저장소와 상호 작용할 수 있도록하는 공식 패키지

[Redux 공식페이지](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

> React Hook 코드 (stateHook.js 에서 전체코드를 볼 수 있습니다!)
```
function App(){
    const [ counter, setCounter ] = useState(1);

    const increament = () => {
        setCounter ( prevCounter => prevCounter + 1)
    }
    return (
        <div>
            <h1 onClick={() => increament()}>상태{ counter }</h1>
            <Hello />
        </div>
    );
}
```
(단방향 데이터 흐름)[https://redux.js.org/img/tutorials/essentials/one-way-data-flow.png]