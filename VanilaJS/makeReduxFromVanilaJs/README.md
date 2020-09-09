# VanilaJS로 만드는 Redux / React / React Hook
브라우저 실습환경에서 코드를 바로 돌려보면서 실습하니 너모 좋습니다.
 > [브라우저 실습환경 : codesandbox](https://codesandbox.io/index2)

index.js, redux.js 에서 전체코드를 볼 수 있습니다!

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

> React Hook 코드 (makeReactFromVanilaJS/stateHook.js 에서 전체코드를 볼 수 있습니다!)
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

![단방향 데이터 흐름](https://redux.js.org/img/tutorials/essentials/one-way-data-flow.png)

문제점 > 동일한 상태를 공유하고 사용해야 하는 여러 구성 요소가있는 경우
, 특히 해당 구성요소가 애플리케이션의 다른 부분에 있는 경우(하위 컴포넌트 개념인가?)
단순성이 무너질 수 있다. 부모 컨포넌트로 상태를 올려서 해결할 수 있지만 항상 도움되는것은 아니다.

이 문제를 해결하는 한 가지 방법으로 구성 요소에서 공유 상태를 추출하여
구성요소 트리 외부의 중앙에 위치에 두는 것이다. 이를 통해 컴포넌트 트리는
큰 "뷰"가되고 모든 컴포넌트는 트리의 어디에 있든 상관없이 상태에 액세스 하거나
작업을 트리거 할 수있다.

상태 관리와 관련된 개념을 정의 및 분리하고 뷰와 상태 간의 독립성을 유지하는 규칙을 시행함으로써
코드에 더 많은 구조와 유지 관리기능을 제공한다.

이것이 Redux의 기본 아이디어이다. 애플리케이션의 전역 상태를 포함하는 단일 중앙 위치와
코드를 예측 가능하게 만들기 위해 해당 상태를 업데이트 할 때 따라야 할 특정 패턴이다.

> 공부해야할 것들
- JS는 Immutable을 위한 노력들. : React는 Immutable을 선호, 모든 코드가 이에 기반.
- React PureComponent
- ...Spread Operator
- [React-Redux-Immutable-Guide](https://daveceddia.com/react-redux-immutability-guide/)

