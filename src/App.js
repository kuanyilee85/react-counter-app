import React from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

function App() {
  console.log('Render app');
  return (
    <>
      <h2>Counter</h2>
      <Counter initialCount={0} />
      <h2>CounterHooks</h2>
      <CounterHooks initialCount={5} />
    </>
  );
}

export default App;
