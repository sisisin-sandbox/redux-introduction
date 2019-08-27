import React from 'react';

export const IncrementButton = (props: {increment: () => void}) => {
  // --- dispatch `INCREMENT`
  return <button onClick={props.increment}>+</button>;
};
