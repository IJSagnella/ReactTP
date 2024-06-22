import React, { useState } from 'react';

const EditForm = ({ branch, onSave }) => {
    const [alias, setAlias] = useState(branch.alias);
    const [provincia, setProvincia] = useState(branch.provincia);
    const [localidad, setLocalidad] = useState(branch.localidad);
    const [direccion, setDireccion] = useState(branch.direccion);
    const [mail, setMail] = useState(branch.mail);
    const [telefono, setTelefono] = useState(branch.telefono);
    const [horarios, setHorarios] = useState(branch.horarios);

    const handleSubmit = (event) => {
        event.preventDefault();
        //validaciones
        onSave({
            ...branch,
            alias,
            provincia,
            localidad,
            direccion,
            mail,
            telefono,
            horarios
        });
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
            <button type="submit">Guardar Cambios</button>
        </form>
    );
};

export default EditForm;
