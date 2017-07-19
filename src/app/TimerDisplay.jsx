import React from 'react'
import {observer} from 'mobx-react';

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

@observer class TimerAction extends React.Component {
    render () {
        return (
            <div style={DisplayStyle}>
                {this.props.timerStore.mainDisplay}
            </div>
        )
    }
}

export default TimerAction