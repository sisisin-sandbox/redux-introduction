import { createStore } from 'redux';

// --- definition of reducer
interface CounterState {
  counter: number;
}
const initialState: CounterState = { counter: 0 };
function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    default:
      return state;
  }
}

// --- configure store
const store = createStore(counter);

// --- set subscription
store.subscribe(() => {
  console.log(store.getState());
});

// --- dispatch `INCREMENT`
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });

console.log(store.getState().counter);
// => 3
