import React from 'react';
import {observer} from 'mobx-react';
import TimerDisplay from './TimerDisplay'
import TimerAction from './TimerAction'

const colors = {
    green: '#4bd761',
    red: '#fd3d2a'
}

@observer class Main extends React.Component {
    render() {
        let rightAction = <TimerAction style={{color: colors.green}} text={'start'} event={this.props.timerStore.startTimer.bind(this.props.timerStore)} />
        let leftAction = ''
        if (this.props.timerStore.isRunning) {
            leftAction = <TimerAction text={'lap'} event={this.props.timerStore.lapTimer.bind(this.props.timerStore)} />
            rightAction = <TimerAction style={{color: colors.red}} text={'stop'} event={this.props.timerStore.stopTimer.bind(this.props.timerStore)} />
        } else {
            if (this.props.timerStore.hasStarted) {
                leftAction = <TimerAction text={'reset'} event={this.props.timerStore.resetTimer.bind(this.props.timerStore)} />
                rightAction = <TimerAction style={{color: colors.green}} text={'start'} event={this.props.timerStore.startTimer.bind(this.props.timerStore)} />
            }
        }
        return (
            <div style={{fontSize: 30}}>
                <TimerDisplay timerStore={this.props.timerStore} />
                <div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        {leftAction}
                        {rightAction}                   
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Main;