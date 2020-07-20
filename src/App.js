import React from 'react';
import './App.css';
import Timer from "./components/Timer/Timer";

function App() {
    return (
        <div className="main-app">
            <header className="main-header">
                <h2>Timer</h2>
            </header>
            <Timer/>
        </div>
    );
}

export default App;
