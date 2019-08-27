import { Dispatch } from 'react';
import { Action } from 'redux';
import { increment as createIncrementAction } from './Reducer';

export class CounterActionDispatcher {
  constructor(private dispatch: Dispatch<Action>) {}

  increment() {
    this.dispatch(createIncrementAction());
  }
}
