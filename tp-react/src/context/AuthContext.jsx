import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext();

const emails = [
    { emailname: 'admin', password: 'admin123', role: 'Administrador', token: 'admin-token' },
    { emailname: 'empleado', password: 'empleado123', role: 'Empleado', token: 'empleado-token'}
];


export const AuthProvider = ( {children} ) => {

    const [logueado, setLogueado] = useState(false);
    const [role, setRole] = useState("");
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const login = (emailname, password) => {
        const email = emails.find(u => u.emailname === emailname && u.password === password);
        if (email) {
            setLogueado(true);
            setRole(email.role);
            setToken(email.token);
            if (email.role === 'Administrador') {
                navigate('../pages/Admin');
            } else {
                navigate('../pages/Empleado');
            }
            return email;
        } else {
            setLogueado(false);
            setRole('');
        }

    }
    const logout = () => {
        setLogueado(false);
        setRole('');
        setToken(null);
        navigate('/')
    }

    return (
        <AuthContext.Provider value={ {logueado, login, logout, role, token } }>
            { children }
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext);
}