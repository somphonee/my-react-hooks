

import { useState, useEffect } from "react";
export const useApi = () => {
     const [loading, setLoading] = useState(false);
     const [innitailCounter, setInnitailCounter] = useState(0);
    

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
                setInnitailCounter(innitailCounter);
            });
        },[]);
        return {
            loading,
            innitailCounter,
            setInnitailCounter
        };
        
};