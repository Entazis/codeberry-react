import { useState, useEffect } from 'react';

export default (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    console.log('useFetch');

    useEffect(() => {
        console.log('useFetch > useEffect');
        const fetchData = async () => {
            console.log('useFetch > useEffect > fetchData');
            setIsLoading(true);
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
                setIsLoading(false);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [url, options]);

    return { response, error, isLoading };
};