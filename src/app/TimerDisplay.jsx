import React from 'react';

const TimerDisplay = ({timer, text}) => {
  return (
    <div style={{
        borderBottom: '1px solid #d9dae0',
        display: 'flex',
      }}
    >
      <div
        style={{
            fontSize: 30,
            fontFamily: 'HelveticaNeue-UltraLight',
            color: '#7f8083',
            padding: 20,
            flex: 1,
        }}
      >
        {text}
      </div>
      <div
        style={{fontSize: 30,
          padding: 20,
          fontFamily: 'HelveticaNeue-UltraLight',
          color: '#7f8083',
        }}
      >
        {timer.display}
      </div>
    </div>
  );
};

export default TimerDisplay;