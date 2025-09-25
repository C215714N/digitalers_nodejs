import { users } from "../models/userDAO.js";
import { UserDTO } from "../models/userDTO.js";

export const createUser = (req, res) => {
    const newUser = new UserDTO(req.body);
    findUser(req.params.id)
        .then( exists => !exists ? 
            users.createUser(newUser) : {message: "usuario ya existe"} )
        .then( msg => res.json(msg))
}
export const findUserById = (req, res) =>{ 
    users.findUser(req.params.id)
        .then(data => !req.params.id ? 
            users : data || { message: "usuario no encontrado"} )
        .then(msg => res.json(msg))
}
export const updateUser = (req, res) => {
    users.findUser(req.params.id)
    .then(exists => exists ? 
        users.updateUser(req.params.id, req.body) : {message: "usuario no encontrado"})
    .then( msg =>res.json(msg))
}
export const deleteUser = (req, res) => { 
    users.findUser(req.params.id)
    .then(exists => req.params.id == req.body.id && exists ? 
        users.deleteUser(req.params.id) : {message: "no se pudo eliminar al usuario " + req.params.id})
    .then(msg => res.json({msg}))
}