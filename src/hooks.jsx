

import { useState, useEffect } from "react";
export const useApi = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setLoading(false);
                setData(data);
            });
    }, []);
    return {
        loading,
        data
    };

};