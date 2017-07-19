import React from 'react'

const DisplayStyle = {
    background: 'white',
    height: 120,
    fontSize: 60,
    fontFamily: 'HelveticaNeue-UltraLight',
    border: 'solid #cecfd0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const TimerAction = () => {
    return (
        <div style={DisplayStyle}>
            0 : 00 : 00
        </div>
    )
}

export default TimerAction