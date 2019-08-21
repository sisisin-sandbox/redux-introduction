import { connect } from 'react-redux';
import { CounterState } from './Reducer';
import { CounterActionDispatcher } from './CounterActionDispatcher';
import { Counter } from './Counter';

export const CounterContainer = connect(
  (state: CounterState) => state,
  dispatch => ({ actions: new CounterActionDispatcher(dispatch) }),
)(Counter);
