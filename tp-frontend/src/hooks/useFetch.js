import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>setData(data.results))
        .finally(()=>setLoading(false));//Se ejecuta cuando terminan todas las promesas
    }, []);

    console.log(data);
    return { data, loading };
}

