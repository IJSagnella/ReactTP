import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";




const AuthContext = createContext();


export const AuthProvider = ( {children} ) => {

    const [logueado, setLogueado] = useState(false);
    const [rol, setRol] = useState("");
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setLogueado(true);
            setToken(storedToken);

            // Verificar token con el backend para obtener el rol
            const verificarToken = async () => {
                try {
                    const response = await fetch('http://localhost:8888/validar', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',  // Indicamos que el cuerpo es JSON
                        },
                        body: JSON.stringify({token:storedToken}), // Convertimos los datos a JSON
                      });

                    if (response.ok) {
                        const data = await response.json();
                        setRol(data.rol);
                    } else {
                        logout(); // Si el token no es válido, cerrar sesión
                    }
                } catch (error) {
                    console.error("Error al validar token:", error);
                    logout();
                }
            };

            verificarToken();
        }
    }, []); 

    const login = async (email, password) => {
    try {
        const response = await fetch('http://localhost:8888/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',  // Indicamos que el cuerpo es JSON
            },
            body: JSON.stringify({email, password}), // Convertimos los datos a JSON
          });

        if (response.ok) {
            const data = await response.json();
            setLogueado(true);
            setRol(data.rol);
            setToken(data.token);

            // Guardar token en localStorage
            localStorage.setItem("token", data.token);

            return data; // Devolvemos el usuario autenticado
        } else {
            setLogueado(false);
            setRol("");
            return null; // Falló la autenticación
        }
    } catch (error) {
        console.error("Error al conectar con el servidor:", error);
        return null; // Error en la conexión
    }
};
            

    const logout = () => {
        setLogueado(false);
        setRol('');
        setToken(null);
        localStorage.removeItem("token"); // Eliminar token al cerrar sesión
        navigate('/')
    }

    return (
        <AuthContext.Provider value={ {logueado, login, logout, rol, token } }>
            { children }
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext);
}