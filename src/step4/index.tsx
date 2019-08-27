import React, { Dispatch } from 'react';
import ReactDOM from 'react-dom';
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
  dispatch: Dispatch<any>;
}
class Counter extends React.Component<CounterProps, never> {
  render() {
    return (
      <div>
        <div>count: {this.props.counter}</div>
        <IncrementButton increment={() => this.props.dispatch(createIncrementAction())} />
      </div>
    );
  }
}

// --- configure store
export const store = createStore(counter);

class App extends React.Component<any, CounterState> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  componentDidMount() {
    // --- set subscription
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  render() {
    return <Counter counter={store.getState().counter} dispatch={store.dispatch}></Counter>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
