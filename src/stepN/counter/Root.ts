import { connect } from 'react-redux';
import { CounterState } from './Reducer';
import { CounterActionDispatcher } from './CounterActionDispatcher';
import { Counter } from './Counter';
import { Dispatch } from 'redux';

const mapStateToProps = (state: CounterState) => ({ state });
const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: new CounterActionDispatcher(dispatch),
});
export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
