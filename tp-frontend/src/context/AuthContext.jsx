import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [logueado, setLogueado] = useState(false);
    const [rol, setRol] = useState(null);
    const [token, setToken] = useState(null);
    const [sucursal, setSucursal] = useState(null);
    const navigate = useNavigate();

    // ✅ Almacenar en localStorage los datos de login
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedRol = localStorage.getItem("rol");
        const storedSucursal = localStorage.getItem("sucursal");

        if (storedToken && storedRol) {
            setLogueado(true);
            setRol(Number(storedRol));
            setToken(storedToken);
            setSucursal(storedSucursal);
        } else {
            setLogueado(false);
            setRol(null);
            setToken(null);
            setSucursal(null);
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await fetch("http://localhost:8888/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            console.log(response.ok);
            if (!response.ok) {
                console.log("no se logueo");
                throw new Error("Credenciales incorrectas");
            }

            console.log("se logueo");
            const data = await response.json();
            setLogueado(true);
            setRol(data.rol);
            setToken(data.token);
            setSucursal(data.sucursal);

            localStorage.setItem("token", data.token);
            localStorage.setItem("rol", data.rol);
            localStorage.setItem("sucursal", data.sucursal);

            return data;
        } catch (error) {
            console.error("Error en login:", error);
            return null;
        }
    };

    const logout = () => {
        console.log("Cerrando sesión...");
        setLogueado(false);
        setRol(null);
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("rol");
        localStorage.removeItem("sucursal");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ logueado, login, logout, rol, token, sucursal }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);