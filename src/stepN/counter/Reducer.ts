// --- definition of reducer
export interface CounterState {
  counter: number;
}
const initialState: CounterState = { counter: 0 };
export function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    default:
      return state;
  }
}

export const increment = () => ({ type: 'INCREMENT' });
