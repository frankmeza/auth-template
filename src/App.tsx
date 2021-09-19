import React from "react";
import { useState } from "../public";

import "./app.scss";

const App = (): JSX.Element => {
    const [counterState, setCounterState] = useState(0);

    const increment = () => {
        setCounterState(counterState + 1);
    };

    const decrement = () => {
        setCounterState(counterState - 1);
    };

    return (
        <React.Fragment>
            <h2 onClick={increment}>Add 1</h2>
            <p>{counterState}</p>
            <h2 onClick={decrement}>Minus 1</h2>
        </React.Fragment>
    );
};

export default App;
