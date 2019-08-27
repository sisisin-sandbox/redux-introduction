import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore, Dispatch } from 'redux';
import { IncrementButton } from './IncrimentButton';

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

// ActionCreator
const createIncrementAction = () => ({ type: 'INCREMENT' });

// Component
interface CounterProps extends CounterState {
  actions: CounterActionDispatcher;
}
class Counter extends React.Component<CounterProps, never> {
  render() {
    return (
      <div>
        <div>count: {this.props.counter}</div>
        <IncrementButton increment={() => this.props.actions.increment()} />
      </div>
    );
  }
}

class CounterActionDispatcher {
  constructor(private dispatch: Dispatch) {}
  increment() {
    this.dispatch(createIncrementAction());
  }
}
const CounterContainer = connect(
  (state: CounterState) => state,
  dispatch => ({ actions: new CounterActionDispatcher(dispatch) }),
)(Counter);

// --- configure store
export const store = createStore(counter);

class App extends React.Component<any, CounterState> {
  render() {
    return (
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
