let  createStore = require('./redux');

const INCREMENT = 'increment';
const RESET = 'reset';

function reducer(state = {}, action){
    if(action.type === INCREMENT){
        return {
            ...state,
            count:state.count ? state.count +1 : 1
        };
    }else if(action.type === RESET){
        return {
            ...state,
            count:action.resetCount
        }
    }
    return state;
}

const store = createStore(reducer);

function update(){
    console.log(store.getState());
}

store.subscribe(update);

function actionCreator(type, data){
    return {
        ...data,
        type: type
    };
}

function increment(){
    store.dispatch(actionCreator(INCREMENT));
}

function reset(){
    store.dispatch(actionCreator(RESET, {resetCount: 10}))
}

increment();
increment();
increment();
increment();
increment();

reset();

console.log(store.getState());