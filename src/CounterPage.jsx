import { useState, useEffect } from "react";
import { Wrapper, CounterText, Button, Label, Input } from "./Components";


export const CounterPage = () => {
    const [innitailCounter, setInnitailCounter] = useState(10);
    const [counter, setCounter] = useState(innitailCounter);
    


    useEffect(() => {
        setCounter(innitailCounter);
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter > 0 ? prevCounter - 1 : prevCounter
        );
        }, 1000);

         return () => clearInterval(interval);
    }
    , [innitailCounter]);
    return (
        <Wrapper>
            <CounterText>{counter}</CounterText>
            <div>
                <Button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>-1</Button>
                <Button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>+1</Button>
            </div>
            <Label>Set Initial Counter</Label>
            <Input
                type="number"
                value={innitailCounter}
                onChange={(e) => {
                    setInnitailCounter(e.target.value);
                    setCounter(e.target.value);
                }}
            />
        </Wrapper>
    );
};
export default CounterPage;
