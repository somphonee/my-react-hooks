import { useState, useEffect } from "react";
import { Wrapper, CounterText, Button, Label, Input } from "./Components";


export const CounterPage = () => {
    const [innitailCounter, setInnitailCounter] = useState(0);
    const [counter, setCounter] = useState(innitailCounter);
    const [loading, setLoading] = useState(false);
    
    const getInnitailCounter = () => new Promise((resresolve) => {
        setTimeout(() => {
            resresolve(10);
        }
        , 1000);
    })

    useEffect(() => {
        setLoading(true);
        getInnitailCounter().then((innitailCounter) => {
            setLoading(false);
            setCounter(innitailCounter);
        });
    },[]);



    useEffect(() => {
        let interval;
            setCounter(innitailCounter);
             interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter > 0 ? prevCounter - 1 : prevCounter
            );
            }, 1000);
  
         return () =>{
             if (interval){
            clearInterval(interval);
         }
        }
    }
    , [innitailCounter]);
    if (loading) {
        return <div>Loading...</div>;
    }
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
