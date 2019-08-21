import React from 'react';
import { IncrementButton } from '../IncrimentButton';
import { CounterState } from './Reducer';
import { CounterActionDispatcher } from './CounterActionDispatcher';

interface CounterProps extends CounterState {
  actions: CounterActionDispatcher;
}
export class Counter extends React.Component<CounterProps, never> {
  render() {
    return (
      <div>
        <div>count: {this.props.counter}</div>
        <IncrementButton increment={this.props.actions.increment} />
      </div>
    );
  }
}
