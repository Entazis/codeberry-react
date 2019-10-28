import {useState, useEffect, useCallback} from 'react';

export default (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const res = await fetch(url, options);
            const json = await res.json();
            setResponse(json);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }
    }, [url, options]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { response, error, isLoading };
};