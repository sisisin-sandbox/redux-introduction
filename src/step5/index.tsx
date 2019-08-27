import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
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
  increment: () => void;
}
class Counter extends React.Component<CounterProps, never> {
  render() {
    return (
      <div>
        <div>count: {this.props.counter}</div>
        <IncrementButton increment={this.props.increment} />
      </div>
    );
  }
}

const CounterContainer = connect(
  (state: CounterState) => state,
  dispatch => {
    return {
      increment() {
        dispatch(createIncrementAction());
      },
    };
  },
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
