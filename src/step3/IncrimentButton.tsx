import React from 'react';
import { store } from '.';

export const IncrementButton = () => {
  // --- dispatch `INCREMENT`
  return <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>;
};
