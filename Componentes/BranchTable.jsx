// src/BranchTable.jsx

import React, { useState } from 'react';

const initialBranches = [
    {
        id: 1,
        alias: 'Sucursal 1',
        provincia: 'Buenos Aires',
        localidad: 'CABA',
        direccion: 'Calle Falsa 123',
        mail: 'sucursal1@empresa.com',
        telefono: '111-111-1111',
        horarios: 'Lunes a Viernes 9-18',
    },
    {
        id: 2,
        alias: 'Sucursal 2',
        provincia: 'Córdoba',
        localidad: 'Córdoba Capital',
        direccion: 'Calle Verdad 456',
        mail: 'sucursal2@empresa.com',
        telefono: '222-222-2222',
        horarios: 'Lunes a Viernes 9-18',
    },
    {
        id: 3,
        alias: 'Sucursal 3',
        provincia: 'Santa Fe',
        localidad: 'Rosario',
        direccion: 'Avenida Siempreviva 789',
        mail: 'sucursal3@empresa.com',
        telefono: '333-333-3333',
        horarios: 'Lunes a Viernes 8-17',
    },
    {
        id: 4,
        alias: 'Sucursal 4',
        provincia: 'Mendoza',
        localidad: 'Mendoza Capital',
        direccion: 'Boulevard de los Sueños 101',
        mail: 'sucursal4@empresa.com',
        telefono: '444-444-4444',
        horarios: 'Lunes a Viernes 9-19',
    },
    {
        id: 5,
        alias: 'Sucursal 5',
        provincia: 'Buenos Aires',
        localidad: 'La Plata',
        direccion: 'Camino Real 102',
        mail: 'sucursal5@empresa.com',
        telefono: '555-555-5555',
        horarios: 'Lunes a Viernes 9-18',
    },
    {
        id: 6,
        alias: 'Sucursal 6',
        provincia: 'Santa Fe',
        localidad: 'Santa Fe',
        direccion: 'Calle de las Flores 303',
        mail: 'sucursal6@empresa.com',
        telefono: '666-666-6666',
        horarios: 'Lunes a Viernes 9-17',
    },
    {
        id: 7,
        alias: 'Sucursal 7',
        provincia: 'Entre Ríos',
        localidad: 'Paraná',
        direccion: 'Avenida Libertador 404',
        mail: 'sucursal7@empresa.com',
        telefono: '777-777-7777',
        horarios: 'Lunes a Viernes 8-18',
    },
    {
        id: 8,
        alias: 'Sucursal 8',
        provincia: 'Chaco',
        localidad: 'Resistencia',
        direccion: 'Camino del Inca 505',
        mail: 'sucursal8@empresa.com',
        telefono: '888-888-8888',
        horarios: 'Lunes a Viernes 9-17',
    },
    {
        id: 9,
        alias: 'Sucursal 9',
        provincia: 'Salta',
        localidad: 'Salta',
        direccion: 'Paseo del Sol 606',
        mail: 'sucursal9@empresa.com',
        telefono: '999-999-9999',
        horarios: 'Lunes a Viernes 9-18',
    },
    {
        id: 10,
        alias: 'Sucursal 10',
        provincia: 'Tucumán',
        localidad: 'San Miguel de Tucumán',
        direccion: 'Camino de la Luna 707',
        mail: 'sucursal10@empresa.com',
        telefono: '101-101-1010',
        horarios: 'Lunes a Viernes 8-17',
    },
    {
        id: 11,
        alias: 'Sucursal 11',
        provincia: 'Neuquén',
        localidad: 'Neuquén Capital',
        direccion: 'Ruta de la Estrella 808',
        mail: 'sucursal11@empresa.com',
        telefono: '111-111-1112',
        horarios: 'Lunes a Viernes 9-18',
    },
    {
        id: 12,
        alias: 'Sucursal 12',
        provincia: 'Misiones',
        localidad: 'Posadas',
        direccion: 'Avenida del Libertador 909',
        mail: 'sucursal12@empresa.com',
        telefono: '121-121-1212',
        horarios: 'Lunes a Viernes 9-19',
    }
];


const BranchTable = () => {
    const [branches, setBranches] = useState(initialBranches);

    const handleEdit = (id) => {
        alert(`Editar sucursal con ID: ${id}`);
    };

    const handleAdd = () => {
        alert('Agregar nueva sucursal');
    };

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Alias</th>
                        <th>Provincia</th>
                        <th>Localidad</th>
                        <th>Dirección</th>
                        <th>Mail</th>
                        <th>Teléfono</th>
                        <th>Horarios</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {branches.map((branch) => (
                        <tr key={branch.id}>
                            <td>{branch.id}</td>
                            <td>{branch.alias}</td>
                            <td>{branch.provincia}</td>
                            <td>{branch.localidad}</td>
                            <td>{branch.direccion}</td>
                            <td>{branch.mail}</td>
                            <td>{branch.telefono}</td>
                            <td>{branch.horarios}</td>
                            <td>
                                <button onClick={() => handleEdit(branch.id)}>Modificar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleAdd}>Agregar Nueva Sucursal</button>
        </div>
    );
};

export default BranchTable;
