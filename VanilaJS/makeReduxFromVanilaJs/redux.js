 function createStore(reducer){
    let state;
    const lieteners = [];

    const getState = () => ({...state});
    const dispatch = (action) => {
        state = reducer(state, action);
        lieteners.forEach((fn) => fn());
    }

    const subscribe = (fn) => {
        lieteners.push(fn);
    }
    return {
        getState,
        dispatch,
        subscribe
    };
}
module.exports = createStore;