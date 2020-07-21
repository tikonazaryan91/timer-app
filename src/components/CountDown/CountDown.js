import React from "react";

const CountDown = ({digit}) => {
    const [count, setCount] = React.useState(digit);

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)
        return () => clearInterval(timer);
    }, [count])


    return (
        <div>
            <div>CountDown</div>
            {count}
        </div>

    )
}

export default CountDown;