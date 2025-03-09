import { useState, useEffect } from "react";

export function useFetch(url, { method = "GET", body = null, token = null }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const headers = {
            "Content-Type": "application/json",
        };
        
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const options = { method, headers, body: body ? JSON.stringify(body) : null };

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error("Error en la petición");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, method, body, token]);

    return { data, loading, error };
}