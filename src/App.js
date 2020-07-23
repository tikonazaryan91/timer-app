import React from 'react';
import './App.css';
import CountUp from "./components/CountUp/CountUp";
import CountDown from "./components/CountDown/CountDown";
import CountdownTimer from "./components/Timer/CountdownTimer";


function App() {
    return (
        <div className="main-app">
            <header className="main-header">
                <h2>Timer</h2>
            </header>
            <div>
                <CountdownTimer date="2020-07-25"/>
                <CountdownTimer date="2020-07-26"/>
            </div>
            <div className="main-countUp">
                <h2>Count Up</h2>
                <CountUp digit={0}/>
                <CountUp digit={5}/>
                {/*<CountUp digit={10}/>*/}
            </div>
            <div>
                <h2>Count Down</h2>
                <CountDown digit={0}/>
                <CountDown digit={10}/>
                {/*<CountDown digit={20}/>*/}
            </div>
        </div>
    );
}

export default App;
