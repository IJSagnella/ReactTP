export const buscarSucursales = async () => {
    try {
        const response = await fetch(`http://localhost:8888/sucursales`);
        if (!response.ok) {
            throw new Error(`Error al obtener las sucursales`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error en la petición de las sucursales:`, error);
        throw error;
    }
};