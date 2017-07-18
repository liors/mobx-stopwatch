import React from 'react'

const ButtonStyle = {
  fontFamily: 'HelveticaNeue-UltraLight',
  fontSize: 20,
  width: 72,
  height: 72,
  margin: 24,
  padding: 0,
  cursor: 'pointer',
  letterSpacing: 1,
  border: 0,
  borderRadius: '50%',
  outline: 'none',
  background: 'white',
};

const TimerAction = ({style, event, text}) => {
    return (
        <button
            style={{...ButtonStyle, ...style}}
            onClick={() => event()}>
            {text}
        </button>
    )
}

export default TimerAction