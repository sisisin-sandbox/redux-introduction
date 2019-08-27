import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { counter } from './counter/Reducer';
import { CounterContainer } from './counter/Root';
import { Provider } from 'react-redux';

// --- configure store
export const store = createStore(counter);

// Component
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
