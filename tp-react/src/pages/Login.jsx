import '../css/Login.css';
import { useState } from "react";
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");

    const handlerLogin = async() => {
        try{
            const request = await axios.post("http://localhost:5173/login", {
                email,
                contrasena
            });
            if(request.data.success){
                login(request.data.accessToken);
                navigate("/");
            }
            alert(request.data.message);
        }catch(error){
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }
    return(
        <div className="container login-container">
                <div className="login-form-1">
                    <h3>Ingresa a nuestra pagina!</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="form-label">Ingresa tu Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="form-label">Ingresa tu Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btnSubmit" onClick={handlerLogin}>Ingresar</button>
                        </div>
                        <div className="form-group">
                            <a href="#" className="ForgetPwd">Perdiste la contraseña?</a>
                        </div>
                    </form>
                </div>
        </div>
    )
}