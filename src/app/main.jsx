import React from 'react';
import TimerDisplay from './TimerDisplay'
import TimerAction from './TimerAction'


class Main extends React.Component {
    render() {
        return (
            <div style={{fontSize: 30}}>
                <TimerDisplay />
                <div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <TimerAction style={{color: '#4bd761'}} text={'start'}/>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Main;