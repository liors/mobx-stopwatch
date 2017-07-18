import React from 'react';
import {observer} from 'mobx-react';
import TimerDisplay from './TimerDisplay';
import TimerAction from './TimerAction'

const Main = observer(({timerStore}) => {
  let firstButton;
  let secondButton;
    
  if (!timerStore.isRunning) {
    secondButton = (
        <TimerAction style={{color: '#4bd761'}} event={timerStore.startTimer.bind(timerStore)} text= {'start'}/>
    );

    firstButton = (
        <TimerAction event={timerStore.resetTimer.bind(timerStore)} text= {'reset'}/>     
    );

    if (!timerStore.hasStarted) {
      firstButton = null;
    }
  } else {
    secondButton = (
        <TimerAction style={{color: '#fd3d2a'}} event={timerStore.stopTimer.bind(timerStore)} text= {'stop'}/>      
    );

    firstButton = (
        <TimerAction event={timerStore.lapTimer.bind(timerStore)} text= {'lap'}/>  
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
        {timerStore.mainDisplay}
      </div>
      <div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {firstButton}
          {secondButton}
        </div>
        <div>
          {timerStore.lapData.map((el) =>
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
});

export default Main;