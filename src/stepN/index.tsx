import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { counter } from './counter/Reducer';
import { CounterContainer } from './counter/Root';

// --- configure store
export const store = createStore(counter);

// Component
class App extends React.Component {
  render() {
    return <CounterContainer />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
