export const buscarOrdenesPor = async (dni) => {
    try {
        const response = await fetch(`http://localhost:8888/ordenes/search/${dni}`);
        if (!response.ok) {
            throw new Error(`Error al obtener las ordenes del ${dni}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error en la petición a ordenes:`, error);
        throw error;
    }
};