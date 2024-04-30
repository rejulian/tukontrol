import { queryCreateUser, queryGetAllUsers, queryGetUserById, queryGetUserByUsername } from "../models/userModel.js"
import { comparePassword, hashPassword } from "../utils/bcryptUtils.js";
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
    const { username, email, password, role, id_company } = req.body;
    if (!username || !email || !password || !role || !id_company) throw new Error("Complete todos los campos")
    try {
        const hashedPassword = hashPassword(password)
        const user = await queryCreateUser(username, email, hashedPassword, role, id_company)
        return res.status(200).json([{ message: "Registro exitoso", data: user }])
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Complete todos los campos" })
    }
    try {
        const user = await queryGetUserByUsername(username)
        if (!user) return res.status(401).json({ message: "Credenciales invalidas" })
        const isPassword = comparePassword(password, user.password)
        if (!isPassword) return res.status(401).json({ message: "Credenciales invalidas" })

        const userForToken = {
            id: user.id,
            username: user.username,
            role: user.role,
            id_company: user.id_company
        }

        const token = jwt.sign(userForToken, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 * 7 }) // Expires in seven days

        return res.json([{ message: "Login exitoso", data: { username: user.username, token: `Bearer ${token}` } }])
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await queryGetAllUsers();
        return res.status(200).json({ data: users })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await queryGetUserById();
        return res.status(200).json([{ message: "Usuario encontrado", data: user }])
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}