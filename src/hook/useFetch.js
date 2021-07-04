import { useEffect, useState } from "react";
import axios from 'axios';

export const useFetch = (url) => {
    const BASE_URL = `https://dummyapi.io/data/api/${url}`;
    const APP_ID = '60e0ba06c87b0c6f8a8597e0';
    
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => setData(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [BASE_URL]);

    return {loading, data};
}