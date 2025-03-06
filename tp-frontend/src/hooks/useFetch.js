import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())  // Procesa la respuesta en formato JSON
            .then((data) => {
                if (data.success) {
                    setData(data.results);  // Usa 'result' en lugar de 'results'
                } else {
                    setData(null);  // Si la API devuelve un error, puedes manejarlo aquí
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setData(null);  // Si hay un error, también puedes limpiar los datos
            })
            .finally(() => setLoading(false));  // Esto siempre se ejecutará al final

    }, [url]);  // Dependencia: se ejecuta cada vez que cambia la URL

    console.log("Fetch");
    console.log(data);

    return { data, loading };
}

