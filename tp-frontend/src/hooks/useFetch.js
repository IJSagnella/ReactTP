import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext"; // Importar el contexto

export const useFetch = (url, options = {}) => {
    const { token } = useAuth(); // Obtener el token desde el contexto
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Si el token está presente, lo agregamos a las cabeceras
                const headers = {
                    "Content-Type": "application/json",
                    ...options.headers,
                };

                if (token) {
                    headers["Authorization"] = `Bearer ${token}`;
                }

                const response = await fetch(url, {
                    method: options.method || "GET",
                    headers,
                    body: options.body ? JSON.stringify(options.body) : undefined,
                });

                if (!response.ok) {
                    throw new Error("Error en la solicitud");
                }

                const result = await response.json();

                setData(result.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (url) {
            fetchData();
        }
    }, []); // Agregamos token como dependencia

    return { data, loading, error };
};