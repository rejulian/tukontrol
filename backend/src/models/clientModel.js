import { connection } from "../config/dbConfig.js";

export const queryGetAllClients = async (id_company) => {
    try {
        const [results] = await connection.query('SELECT c.id, c.name, c.phone, c.id_company FROM client c INNER JOIN company com ON c.id_company = com.id WHERE c.id_company = ?', [id_company])
        if(results.length === 0) throw new Error("No se encontraron clientes")
        return results
    } catch (error) {
        return error.message
    }
}