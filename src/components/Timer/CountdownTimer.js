import React from "react";

const CountdownTimer = ({date}) => {

    const calculateTimeLeft = () => {
        const difference = +new Date(date) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    React.useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
        );
    });

    return (
        <div>
            <h1>Countdown TIMER </h1>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
}

export default CountdownTimer;