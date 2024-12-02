import React, { useState } from 'react';

function ToggleButton() {
  const [state, setState] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setState(prevState => !prevState);
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Current State: {state.toString()}</h1>
      <p>Button pressed {clickCount} times</p>
      <button
        className='btn'
        onClick={handleClick}
        style={{
          backgroundColor: state ? 'green' : 'red',
          color: 'white',
          padding: '10px 20px',
        }}
      >
        Toggle State
      </button>
    </div>
  );
}

export default ToggleButton;
