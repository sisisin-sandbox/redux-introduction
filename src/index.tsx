import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const initialState = { counter: 0 };
function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    default:
      return state;
  }
}

interface State {
  counter: number;
}

const store = createStore(counter);

class App extends React.Component<any, State> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  render() {
    return (
      <div>
        <div>count: {this.state.counter}</div>
        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>hoge</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
