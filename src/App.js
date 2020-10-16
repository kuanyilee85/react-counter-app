import React, { useState } from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {
  console.log('Render app');
  const [theme, setTheme] = useState('red');
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <h2>Counter</h2>
      <Counter initialCount={0} />
      <h2>CounterHooks</h2>
      <CounterHooks initialCount={5} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === 'red' ? 'blue' : 'red';
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
