import { useState, useEffect, useRef, useMemo } from "react";
import { Wrapper, CounterText, Button, Label, Input } from "./Components";


export const CounterPage = () => {
    const [innitailCounter, setInnitailCounter] = useState(0);
    const [counter, setCounter] = useState(innitailCounter);
    const [loading, setLoading] = useState(false);
    const inputfocusEl = useRef(null);
    
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
        if(!loading){
            inputfocusEl.current.focus();
        }

    }, [loading]);



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

 const decrement = useMemo(() => {
        return (e) => {
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, [setCounter]);
    const increment = useMemo(() => {
        return (e) => {
            setCounter((prevCounter) => prevCounter + 1);
        }
    }, [setCounter]);

    const handlChange = useMemo(() => {
        return (e) => {
            setInnitailCounter(e.target.value);
        }
    }, [setInnitailCounter]);
    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Wrapper>
            <CounterText>{counter}</CounterText>
            <div>
                <Button onClick={decrement}>-1</Button>
                <Button onClick={increment}>+1</Button>
            </div>
            <Label>Set Initial Counter</Label>
            <Input
                ref = {inputfocusEl}
                type="number"
                value={innitailCounter}
                onChange={handlChange}
            />
        </Wrapper>
    );
};
export default CounterPage;
