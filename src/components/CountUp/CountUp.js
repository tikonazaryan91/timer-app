import React from "react";
import * as workerTimers from 'worker-timers';

const CountUp = ({digit}) => {
    const [count, setCount] = React.useState(digit);

    React.useEffect(() => {
        let timer = workerTimers.setInterval(() => {
            setCount(count + 1)
        }, 1000)
        return () => workerTimers.clearInterval(timer);
    }, [count])

    return (
        <div>
            <div>CountUp</div>
            {count}
        </div>

    )
}

export default CountUp;

// const CountUp = ({digit}) => {
//     const [count, setCount] = React.useState(digit);
//
//     React.useEffect(() => {
//         let timer = setInterval(() => {
//             setCount(count + 1)
//         }, 1000)
//         return () => clearInterval(timer);
//     }, [count])
//
//     return (
//         <div>
//             <div>CountUp</div>
//             {count}
//         </div>
//
//     )
// }
//
// export default CountUp;