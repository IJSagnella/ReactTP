import React, { useState } from 'react';

const AddForm = ({ onSave }) => {
    const [alias, setAlias] = useState('');
    const [provincia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [horarios, setHorarios] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // validaciones
        onSave({
            id: Math.floor(Math.random() * 1000), // Simulando generación de ID único
            alias,
            provincia,
            localidad,
            direccion,
            mail,
            telefono,
            horarios
        });
        // Limpiar los campos después de guardar
        setAlias('');
        setProvincia('');
        setLocalidad('');
        setDireccion('');
        setMail('');
        setTelefono('');
        setHorarios('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Alias:
                <input type="text" value={alias} onChange={(e) => setAlias(e.target.value)} />
            </label>
            <label>
                Provincia:
                <input type="text" value={provincia} onChange={(e) => setProvincia(e.target.value)} />
            </label>
            <label>
                Localidad:
                <input type="text" value={localidad} onChange={(e) => setLocalidad(e.target.value)} />
            </label>
            <label>
                Dirección:
                <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
            </label>
            <label>
                Mail:
                <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} />
            </label>
            <label>
                Teléfono:
                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </label>
            <label>
                Horarios:
                <input type="text" value={horarios} onChange={(e) => setHorarios(e.target.value)} />
            </label>
            <button type="submit">Agregar Sucursal</button>
        </form>
    );
};

export default AddForm;
