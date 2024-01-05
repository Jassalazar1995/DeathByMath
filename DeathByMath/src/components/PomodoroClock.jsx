import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, stopTimer, resetTimer, updateTimer } from '../actions/pomodoroActions';

const PomodoroClock = () => {
    const dispatch = useDispatch();
    const timeLeft = useSelector(state => state.timeLeft);
    const isRunning = useSelector(state => state.isRunning);

    return (
        <div>
            <h1>Pomodoro Clock</h1>
            <p>Time Left: {timeLeft} seconds</p>
            <button onClick={() => dispatch(startTimer())}>Start</button>
            <button onClick={() => dispatch(stopTimer())}>Stop</button>
            <button onClick={() => dispatch(resetTimer())}>Reset</button>
        </div>
    );
};

export default PomodoroClock;