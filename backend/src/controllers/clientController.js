import { queryGetAllClients } from "../models/clientModel.js";

export const getAllClients = async (req, res) => {
    const {id_company} = req;
    try {
        const clients = await queryGetAllClients(id_company)
        return res.status(200).json([{data: clients}])
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}