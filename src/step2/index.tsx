import React from 'react';
import ReactDOM from 'react-dom';
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

// Component
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
    return (
      <div>
        <div>count: {this.state.counter}</div>

        {/* --- dispatch `INCREMENT` */}
        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
