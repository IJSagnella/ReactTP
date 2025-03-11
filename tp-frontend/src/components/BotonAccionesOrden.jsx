import { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const opcionesEstado = {
    1: [{ id: 2, nombre: "Recibir Equipo" },
        { id: 8, nombre: "Cancelar" }
    ],
    2: [{ id: 3, nombre: "En Revisión" },
        { id: 8, nombre: "Cancelar" }
    ],
    3: [
        { id: 4, nombre: "Esperando Repuestos" },
        { id: 5, nombre: "En Reparación" },
        { id: 8, nombre: "Cancelar" }
    ],
    4: [
        { id: 5, nombre: "En Reparación" },
        { id: 8, nombre: "Cancelar" }
    ],
    5: [
        { id: 6, nombre: "Listo para Retirar" },
        { id: 8, nombre: "Cancelar" }
    ],
    6: [
        { id: 7, nombre: "Entregado al Cliente" },
        { id: 8, nombre: "Cancelar" }
    ]
};

export const BotonAccionesOrden = ({ estadoActual, onChangeEstado }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    const opciones = opcionesEstado[estadoActual] || [];

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle color="primary">Acciones</DropdownToggle>
            <DropdownMenu>
                {opciones.length > 0 ? (
                    opciones.map(opcion => (
                        <DropdownItem key={opcion.id} onClick={() => onChangeEstado(opcion.id)}>
                            {opcion.nombre}
                        </DropdownItem>
                    ))
                ) : (
                    <DropdownItem disabled>Sin acciones disponibles</DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    );
};
