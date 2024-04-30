import { connection } from "../config/dbConfig.js";

export const queryGetAllUsers = async () => {
    try {
        const [results] = await connection.query('SELECT id, username, email, role, id_company FROM user')
        if(results.length === 0) throw new Error("No se encontraron usuarios")
        return results
    } catch (error) {
        return error.message
    }
}

export const queryCreateUser = async (username, email, password, role, id_company) => {
    try {
        const [results] = await connection.query('INSERT INTO user (username, email, password, role, id_company) VALUES (?,?,?,?,?)',[username, email, password, role, id_company])
        return results
    } catch (error) {
        return error.message
    }
}

export const queryGetUserByUsername = async (username) => {
    try {
        const [results] = await connection.query('SELECT * FROM user WHERE username = ?',[username])
        return results[0]
    } catch (error) {
        return error.message
    }
}

export const queryGetUserById = async (id) => {
    try {
        const [results] = await connection.query('SELECT * FROM user WHERE id = ?',[id])
        return results[0]
    } catch (error) {
        return error.message
    }
}