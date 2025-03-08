import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [logueado, setLogueado] = useState(false);
    const [rol, setRol] = useState(null);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    // ✅ Cargar sesión desde localStorage al iniciar
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedRol = localStorage.getItem("rol");

        if (storedToken && storedRol) {
            setLogueado(true);
            setRol(Number(storedRol)); // Convertimos rol a número
            setToken(storedToken);
        } else {
            setLogueado(false);
            setRol(null);
            setToken(null);
        }
    }, []);

    // ✅ Función de login con el backend
    const login = async (email, password) => {
        try {
            const response = await fetch("http://localhost:8888/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Credenciales incorrectas");
            }

            const data = await response.json();
            setLogueado(true);
            setRol(data.rol);
            setToken(data.token);

            // Guardar en localStorage
            localStorage.setItem("token", data.token);
            localStorage.setItem("rol", data.rol);

            // Redirigir según el rol
            navigate(data.rol === 1 ? "/admin" : "/empleado");

            return data; // Retornar datos del usuario
        } catch (error) {
            console.error("Error en login:", error);
            setLogueado(false);
            setRol(null);
            setToken(null);
            return null;
        }
    };

    // ✅ Función de logout
    const logout = () => {
        setLogueado(false);
        setRol(null);
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("rol");
        navigate("/login"); // Redirigir después de cerrar sesión
    };

    return (
        <AuthContext.Provider value={{ logueado, login, logout, rol, token }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para acceder al contexto de autenticación
export const useAuth = () => useContext(AuthContext);