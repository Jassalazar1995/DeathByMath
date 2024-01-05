import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, stopTimer, resetTimer, updateTimer } from '../PomodoroSlice';


const PomodoroClock = () => {
    const dispatch = useDispatch();
    const timeLeft = useSelector(state => state.timeLeft);
    const isRunning = useSelector(state => state.isRunning);

    useEffect(() => {
        let interval;

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                dispatch(updateTimer(timeLeft - 1));
            }, 1000);
        } else if (!isRunning) {
            clearInterval(interval);
        }

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [isRunning, timeLeft, dispatch]);

    return (
        <div className="pomodoro-clock">
            <div className="pomodoro-timer">Time Left: {formatTime(timeLeft)}</div>
            <div className="pomodoro-controls">
                <button onClick={() => dispatch(startTimer())}>Start</button>
                <button onClick={() => dispatch(stopTimer())}>Stop</button>
                <button onClick={() => dispatch(resetTimer())}>Reset</button>
            </div>
        </div>
    );
};

// Helper function to format the time in minutes and seconds
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

export default PomodoroClock;
