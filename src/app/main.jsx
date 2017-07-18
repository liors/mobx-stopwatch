import React from 'react';
import {observer} from 'mobx-react';
import TimerDisplay from './TimerDisplay';
import TimerAction from './TimerAction'

@observer class Main extends React.Component {
    render() {
        let leftButton;
        let rightButton;
            
        if (!this.props.timerStore.isRunning) {
            rightButton = (
                <TimerAction style={{color: '#4bd761'}} event={this.props.timerStore.startTimer.bind(this.props.timerStore)} text= {'start'}/>
            );

            leftButton = (
                <TimerAction event={this.props.timerStore.resetTimer.bind(this.props.timerStore)} text= {'reset'}/>     
            );

            if (!this.props.timerStore.hasStarted) {
                leftButton = null;
            }
        } else {
            rightButton = (
                <TimerAction style={{color: '#fd3d2a'}} event={this.props.timerStore.stopTimer.bind(this.props.timerStore)} text= {'stop'}/>      
            );

            leftButton = (
                <TimerAction event={this.props.timerStore.lapTimer.bind(this.props.timerStore)} text= {'lap'}/>  
            );
        }
        return (
            <div style={{fontSize: 30}}>
            <div
                style={{
                background: 'white',
                height: 120,
                fontSize: 60,
                fontFamily: 'HelveticaNeue-UltraLight',
                border: 'solid #cecfd0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}
            >
                {this.props.timerStore.mainDisplay}
            </div>
            <div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {leftButton}
                {rightButton}
                </div>
                <div>
                {this.props.timerStore.lapData.map((el) =>
                    <TimerDisplay
                    key={el.lap.id}
                    timer={el.lap}
                    text={el.text}
                    />
                    )}
                </div>
            </div>
            </div>
        );
    }
}

export default Main;